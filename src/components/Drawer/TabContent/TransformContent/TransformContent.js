import React, { Component } from "react";
import classes from "./TransformContent.module.css";
import EuklidForm from "./EuklidForm/EuklidForm";
import AthensForm from "./AthensForm/AthensForm";
import ProjectiveForm from "./ProjectiveForm/ProjectiveForm";

class TransformContent extends Component {
    state = {
        euklid: false,
        athens: false,
        progective: false
    };
    toggleStateHandler = name => {
        const newState = { ...this.state };
        for (var key in newState) {
            if (key === name) newState[key] = !newState[key];
            else newState[key] = false;
        }
        this.setState({
            ...newState
        });
    };
    render() {
        return (
            <div className={classes.TransformContent}>
                <div
                    className={classes.Header}
                    onClick={() => this.toggleStateHandler("euklid")}
                >
                    Euklid Transform
                </div>
                {this.state.euklid ? (
                    <EuklidForm clicked={this.props.clicked} />
                ) : null}
                <div
                    className={classes.Header}
                    onClick={() => this.toggleStateHandler("athens")}
                >
                    Athens Transform
                </div>
                {this.state.athens ? (
                    <AthensForm clicked={this.props.clicked} />
                ) : null}
                <div
                    className={classes.Header}
                    onClick={() => this.toggleStateHandler("progective")}
                >
                    Projetive Transform
                </div>
                {this.state.progective ? (
                    <ProjectiveForm clicked={this.props.clicked} />
                ) : null}
            </div>
        );
    }
}

export default TransformContent;
