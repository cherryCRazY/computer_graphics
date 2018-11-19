import { reduxForm } from "redux-form";
import React, { PureComponent } from "react";
import classes from "./DrawContent.module.css";
import CustomInput from "../../../UI/CustomInput/CustomInput";

class DrawContent extends PureComponent {
    handleSubmit = formProps => {
        console.dir(formProps);
        console.log("kekos2");
        const { R1, R2, R3, R4, A } = formProps;
        this.props.clicked(+R1, +R2, +R3, +R4, +A);
    };
    render() {
        const { handleSubmit } = this.props;
        return (
            <form
                className={classes.Form}
                name="draw"
                onSubmit={handleSubmit(this.handleSubmit)}
            >
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
                <button type="submit" className="button">
                    DRAW
                </button>
            </form>
        );
    }
}

const drawComponent = reduxForm({
    form: "draw",
    initialValues: {
        A: 150,
        R1: 15,
        R2: 35,
        R3: 36,
        R4: 25
    }
})(DrawContent);

export default drawComponent;
