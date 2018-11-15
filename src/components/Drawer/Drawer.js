import React, { Component } from "react";
import classes from "./Drawer.module.css";
import { FaHighlighter, FaObjectGroup } from "react-icons/fa";
import CategoryItem from "./CategoryItem/CategoryItem";
import * as actionsCreators from "../../store/actions/index";
import { connect } from "react-redux";
import TabContent from "./TabContent/TabContent";
import CanvasDrawer from "../../services/tools/CanvasDrawer";

class Drawer extends Component {
    componentDidMount() {
        // canvas.drawMyOwnDetail();
        console.log("kek");
    }
    render() {
        const canvas = new CanvasDrawer(this.props.context);
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
                        toggle={canvas.drawMyOwnDetail}
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
