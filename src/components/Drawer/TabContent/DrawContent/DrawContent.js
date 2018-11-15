import { reduxForm } from "redux-form";
import React, { PureComponent } from "react";
import classes from "./DrawContent.module.css";
import CustomInput from "../../../UI/CustomInput/CustomInput";

class DrawContent extends PureComponent {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className={classes.Form} name="draw" onSubmit={handleSubmit}>
                <CustomInput
                    name="A"
                    component="input"
                    placeholder="150"
                    type="number"
                />
                <CustomInput
                    name="R1"
                    component="input"
                    placeholder="15"
                    type="number"
                />
                <CustomInput
                    name="R2"
                    component="input"
                    placeholder="35"
                    type="number"
                />
                <CustomInput
                    name="R3"
                    component="input"
                    placeholder="36"
                    type="number"
                />
                <CustomInput
                    name="R4"
                    component="input"
                    placeholder="25"
                    type="number"
                />
                <button
                    type="submit"
                    onClick={() => {
                        this.props.toggle();
                        handleSubmit();
                    }}
                    className="button"
                >
                    DRAW
                </button>
            </form>
        );
    }
}

const drawComponent = reduxForm({
    form: "draw",
    onSubmit: input => console.dir(input),
    initialValues: {
        draw: {
            A: "0",
            R1: "0",
            R2: "0",
            R3: "0",
            R4: "0"
        }
    }
})(DrawContent);

export default drawComponent;
