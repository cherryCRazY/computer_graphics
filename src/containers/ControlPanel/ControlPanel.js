import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Canvas from "../../components/Canvas/Canvas";
import Menu from "../../components/Menu/Menu";
import Drawer from "../../components/Drawer/Drawer";
import CanvasServices from "../../services/tools/CanvasService";
import * as actionsCreators from "../../store/actions/index";
import { connect } from "react-redux";

class ControlPanel extends Component {
    state = {
        drawer: false,
        clicked: false,
        canvasService: null
    };

    toggleDrawerHandler = () => {
        this.setState({
            drawer: !this.state.drawer
        });
    };
    componentWillReceiveProps() {
        if (this.props.context && !this.state.canvasService) {
            const canvasService = new CanvasServices(this.props.context);
            this.setState({ canvasService: canvasService });
        }
    }

    drawedHandler = () => {
        this.setState({ clicked: true });
    };
    transformHandler = () => {
        return {
            draw: this.state.canvasService.draw,
            translate: this.state.canvasService.translate,
            rotate: this.state.canvasService.rotate,
            athens: this.state.canvasService.athens,
            projectiv: this.state.canvasService.projectiv
        };
    };

    render() {
        const drawDrawer = this.state.drawer ? (
            <Drawer
                drawed={this.drawedHandler}
                transform={this.transformHandler}
                clicked={this.state.clicked}
                toggle={this.toggleDrawerHandler}
                onSetCategory={this.props.onSetCategory}
                category={this.props.category}
            />
        ) : null;

        return (
            <Aux>
                <Menu clicked={this.toggleDrawerHandler} />
                {drawDrawer}
                <Canvas />
            </Aux>
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
)(ControlPanel);
