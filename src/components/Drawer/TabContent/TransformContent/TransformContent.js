import React, { Component } from "react";
import classes from "./TransformContent.module.css";
import EuklidForm from "./EuklidForm/EuklidForm";
import AthensForm from "./AthensForm/AthensForm";
import ProgectiveForm from "./ProgectiveForm/ProgectiveForm";

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
                {this.state.euklid ? <EuklidForm /> : null}
                <div
                    className={classes.Header}
                    onClick={() => this.toggleStateHandler("athens")}
                >
                    Athens Transform
                </div>
                {this.state.athens ? <AthensForm /> : null}
                <div
                    className={classes.Header}
                    onClick={() => this.toggleStateHandler("progective")}
                >
                    Progetive Transform
                </div>
                {this.state.progective ? <ProgectiveForm /> : null}
            </div>
        );
    }
}

export default TransformContent;
