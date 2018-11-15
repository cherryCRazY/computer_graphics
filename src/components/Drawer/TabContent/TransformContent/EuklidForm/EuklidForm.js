import CustomInput from "../../../../UI/CustomInput/CustomInput";
import { reduxForm } from "redux-form";

import React, { PureComponent } from "react";
import classes from "./EuklidForm.module.css";

class EuklidForm extends PureComponent {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <div className={classes.Form}>
                    <div>Translate</div>
                    <CustomInput
                        name="translateX"
                        component="input"
                        type="number"
                    />
                    <CustomInput
                        name="translateY"
                        component="input"
                        type="number"
                    />
                    <button
                        type="button"
                        className="button"
                        onClick={handleSubmit}
                    >
                        Translate
                    </button>
                </div>
                <div className={classes.Form}>
                    <div>Rotate</div>
                    <CustomInput
                        name="rotateX"
                        component="input"
                        type="number"
                    />
                    <CustomInput
                        name="rotateY"
                        component="input"
                        type="number"
                    />
                    <CustomInput
                        name="rotateAngle"
                        component="input"
                        type="number"
                    />
                    <button
                        type="submit"
                        className="button"
                        onClick={handleSubmit}
                    >
                        Rotate
                    </button>
                </div>
            </div>
        );
    }
}

const euklidForm = reduxForm({
    form: "transform",
    onSubmit: input => console.dir(input),
    initialValues: {
        euklidForm: {
            translateX: "0",
            translateY: "0",
            rotateX: "0",
            rotateY: "0",
            rotateAngle: "0"
        }
    }
})(EuklidForm);

export default euklidForm;
