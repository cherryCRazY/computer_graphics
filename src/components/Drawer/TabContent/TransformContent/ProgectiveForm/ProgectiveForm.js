import CustomInput from "../../../../UI/CustomInput/CustomInput";
import { reduxForm } from "redux-form";

import React, { PureComponent } from "react";
import classes from "./ProgectiveForm.module.css";

class ProgectiveForm extends PureComponent {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <div className={classes.Form}>
                    <div>Progective Transform</div>
                    <CustomInput
                        name="Xx"
                        component="input"
                        type="number"
                        placeholder=".1"
                    />
                    <CustomInput
                        name="Yx"
                        component="input"
                        type="number"
                        placeholder="500"
                    />
                    <CustomInput
                        name="Xy"
                        component="input"
                        type="number"
                        placeholder="500"
                    />
                    <CustomInput
                        name="Yy"
                        component="input"
                        type="number"
                        placeholder=".1"
                    />
                    <CustomInput
                        name="X0"
                        component="input"
                        type="number"
                        placeholder="50"
                    />
                    <CustomInput
                        name="Y0"
                        component="input"
                        type="number"
                        placeholder="50"
                    />
                    <CustomInput
                        name="Wx"
                        component="input"
                        type="number"
                        placeholder="0.1"
                    />
                    <CustomInput
                        name="Wy"
                        component="input"
                        type="number"
                        placeholder="0.1"
                    />
                    <CustomInput
                        name="W0"
                        component="input"
                        type="number"
                        placeholder="200"
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

const progectiveForm = reduxForm({
    form: "transform",
    onSubmit: input => console.dir(input),
    initialValues: {
        ...StaticRange,
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
        }
    }
})(ProgectiveForm);

export default progectiveForm;
