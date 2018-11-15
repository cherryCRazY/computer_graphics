import CustomInput from "../../../../UI/CustomInput/CustomInput";
import { reduxForm } from "redux-form";

import React, { PureComponent } from "react";
import classes from "./AthensForm.module.css";

class AthensForm extends PureComponent {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <div className={classes.Form}>
                    <div>Athens Transform</div>
                    <CustomInput
                        name="athenXx"
                        component="input"
                        type="number"
                        placeholder="1"
                    />
                    <CustomInput
                        name="athenYx"
                        component="input"
                        type="number"
                        placeholder="2"
                    />
                    <CustomInput
                        name="athenXy"
                        component="input"
                        type="number"
                        placeholder="2"
                    />
                    <CustomInput
                        name="athenYy"
                        component="input"
                        type="number"
                        placeholder="1"
                    />
                    <CustomInput
                        name="athenX0"
                        component="input"
                        type="number"
                        placeholder="0"
                    />
                    <CustomInput
                        name="athenY0"
                        component="input"
                        type="number"
                        placeholder="0"
                    />
                    <button
                        type="button"
                        className="button"
                        onClick={handleSubmit}
                    >
                        Transform
                    </button>
                </div>
            </div>
        );
    }
}

const athensForm = reduxForm({
    form: "transform",
    onSubmit: input => console.dir(input),
    initialValues: {
        draw: {
            A: "0",
            R1: "0",
            R2: "0",
            R3: "0",
            R4: "0"
        },
        progectiveForm: {
            Xx: "0",
            Yx: "0",
            Xy: "0",
            Yy: "0",
            X0: "0",
            Y0: "0",
            Wx: "0",
            Wy: "0",
            W0: "0"
        },
        athensForm: {
            athenXx: "0",
            athenYx: "0",
            athenXy: "0",
            athenYy: "0",
            athenX0: "0",
            athenY0: "0"
        },
        euklidForm: {
            translateX: "0",
            translateY: "0",
            rotateX: "0",
            rotateY: "0",
            rotateAngle: "0"
        }
    }
})(AthensForm);

export default athensForm;
