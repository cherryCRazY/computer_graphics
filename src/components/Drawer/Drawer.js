import React, { Component } from "react";
import classes from "./Drawer.module.css";
import { FaHighlighter, FaObjectGroup } from "react-icons/fa";
import CategoryItem from "./CategoryItem/CategoryItem";
import * as actionsCreators from "../../store/actions/index";
import { connect } from "react-redux";
import TabContent from "./TabContent/TabContent";
import CanvasDrawer from "../../services/tools/CanvasDrawer";
import { translate } from "./../../services/tools/transformation/euclidTransformation";
import { STEP_OF_GRID } from "./../../services/tools/drawTools/defaultValues";

class Drawer extends Component {
    state = {
        canvas: null
    };
    componentDidMount() {
        const canvas = new CanvasDrawer(this.props.context);
        canvas.clearCanvas(1, 1);
        canvas.drawMyOwnDetail();
        canvas.drawAll(true, true, true, true);
        canvas.clearCanvas(1, 1);
        translate(canvas, 100, 100);

        this.setState({ canvas: canvas });
    }
    onClickHandler = (R1, R2, R3, R4, A) => {
        const canvas = this.state.canvas;
        canvas.clearCanvas(1, 1);
        canvas.drawMyOwnDetail(R1, R2, R3, R4, A);
        canvas.drawAll(true, true, true, true);
    };
    TranslateHandler = (m, n) => {
        const canvas = this.state.canvas;
        const { x, y } = canvas.startPoint;
        canvas.startPoint = {
            x: x + m * STEP_OF_GRID,
            y: y + n * STEP_OF_GRID
        };
        canvas.drawAll(1, 0, 0, 1);
    };
    render() {
        return (
            <div className={classes.Drawer}>
                <div className={classes.Menu}>
                    <CategoryItem
                        Icon={FaHighlighter}
                        clicked={this.props.onSetCategory}
                        name="Draw"
                    />
                    <CategoryItem
                        Icon={FaObjectGroup}
                        clicked={this.props.onSetCategory}
                        name="Transform "
                    />
                </div>
                <div
                    className={classes.Container}
                    category={this.props.category}
                >
                    <TabContent
                        clicked={this.onClickHandler}
                        category={this.props.category}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.context.category,
        context: state.context.context
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCategory: category =>
            dispatch(actionsCreators.setCategory(category))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Drawer);
