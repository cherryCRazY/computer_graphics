import React, { Component } from "react";
import classes from "./Canvas.module.css";
import {
    canvasHeight,
    canvasWidth
} from "../../services/tools/drawTools/defaultValues";
import * as actionsCreators from "../../store/actions/index";
import { connect } from "react-redux";

class canvas extends Component {
    componentDidMount() {
        const context = this.canvas.getContext("2d");
        this.props.onSetContext(context);
    }

    getCanvasRef = node => {
        this.canvas = node;
    };

    render() {
        return (
            <canvas
                ref={this.getCanvasRef}
                className={classes.Canvas}
                width={canvasWidth}
                height={canvasHeight}
            />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetContext: context => dispatch(actionsCreators.setContext(context))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(canvas);
