import CustomInput from "../../../../UI/CustomInput/CustomInput";
import { reduxForm } from "redux-form";

import React, { PureComponent } from "react";
import classes from "./ProjectiveForm.module.css";

class ProjectiveForm extends PureComponent {
    projectiveTransform = formProps => {
        const { Xx, Yx, Xy, Yy, X0, Y0, W0, Wx, Wy } = formProps;
        const projectiv = this.props.clicked().projectiv;
        projectiv(+Xx, +Yx, +Xy, +Yy, +X0, +Y0, Wx, Wy, W0);
    };

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
                        onClick={handleSubmit(this.projectiveTransform)}
                    >
                        Transform
                    </button>
                </div>
            </div>
        );
    }
}

const projectiveForm = reduxForm({
    form: "projective",
    onSubmit: input => console.dir(input),
    initialValues: {
        Xx: 0.1,
        Yx: 500,
        Xy: 500,
        Yy: 0.1,
        X0: 0,
        Y0: 0,
        Wx: 0.1,
        Wy: 0.1,
        W0: 80
    }
})(ProjectiveForm);

export default projectiveForm;
