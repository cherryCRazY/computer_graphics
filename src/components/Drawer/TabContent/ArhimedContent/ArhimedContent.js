import React, { PureComponent } from "react";
import { reduxForm } from "redux-form";
import CustomInput from "../../../UI/CustomInput/CustomInput";
import classes from "./ArhimedContent.module.css";
import Aux from "../../../../hoc/Auxiliary";

class ArhimedContent extends PureComponent {
    render() {
        const { handleSubmit, clicked } = this.props;
        return (
            <Aux>
                <form name="draw">
                    <div className={classes.Form}>
                        <div>Draw</div>
                        <CustomInput name="a" component="input" type="number" />
                        <CustomInput name="b" component="input" type="number" />
                        <CustomInput
                            name="aFinal"
                            component="input"
                            type="number"
                        />
                        <button
                            type="submit"
                            className="button"
                            onClick={handleSubmit()}
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
                            onClick={handleSubmit()}
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
        a: 0,
        b: 1,
        aFinal: 100,
        X: 0,
        Y: 0
    }
})(ArhimedContent);

export default arhimedContent;
