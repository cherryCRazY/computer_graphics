import React, { PureComponent } from "react";
import { reduxForm } from "redux-form";
import CustomInput from "../../../UI/CustomInput/CustomInput";
import classes from "./ArhimedContent.module.css";
import Aux from "../../../../hoc/Auxiliary";

class ArhimedContent extends PureComponent {
    drawHandler = formProps => {
        const { A_Start, Count, A_Final } = formProps;
        const draw = this.props.clicked().arhimed;
        draw(+A_Start, +Count, +A_Final);
    };
    drawTangentHandler = formProps => {
        const { A_Start, Count, A_Final, X, Y } = formProps;
        const arhimedTangent = this.props.clicked().arhimedTangent;
        arhimedTangent(+A_Start, +Count, +A_Final, +X, +Y);
    };
    render() {
        const { handleSubmit } = this.props;
        return (
            <Aux>
                <form name="draw">
                    <div className={classes.Form}>
                        <div>Draw</div>
                        <CustomInput
                            name="A_Start"
                            component="input"
                            type="number"
                        />
                        <CustomInput
                            name="Count"
                            component="input"
                            type="number"
                        />
                        <CustomInput
                            name="A_Final"
                            component="input"
                            type="number"
                        />
                        <button
                            type="submit"
                            className="button"
                            onClick={handleSubmit(this.drawHandler)}
                        >
                            Draw
                        </button>
                    </div>
                </form>
                <form name="AddedLine">
                    <div className={classes.Form}>
                        <div>AddedLine</div>
                        <CustomInput name="X" component="input" type="number" />
                        <CustomInput name="Y" component="input" type="number" />
                        <button
                            type="submit"
                            className="button"
                            onClick={handleSubmit(this.drawTangentHandler)}
                        >
                            Draw
                        </button>
                    </div>
                </form>
            </Aux>
        );
    }
}

const arhimedContent = reduxForm({
    form: "transform",
    onSubmit: input => console.dir(input),
    initialValues: {
        A_Start: 0,
        Count: 5,
        A_Final: 100,
        X: 0,
        Y: 0
    }
})(ArhimedContent);

export default arhimedContent;
