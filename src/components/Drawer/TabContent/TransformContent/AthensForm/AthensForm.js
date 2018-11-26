import CustomInput from "../../../../UI/CustomInput/CustomInput";
import { reduxForm } from "redux-form";

import React, { PureComponent } from "react";
import classes from "./AthensForm.module.css";

class AthensForm extends PureComponent {
    athensTransform = formProps => {
        const {
            athenXx,
            athenYx,
            athenXy,
            athenYy,
            athenX0,
            athenY0
        } = formProps;
        const athens = this.props.clicked().athens;
        athens(+athenXx, +athenYx, +athenXy, +athenYy, +athenX0, +athenY0);
    };
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
                        onClick={handleSubmit(this.athensTransform)}
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
        athenXx: 1,
        athenYx: -0.5,
        athenXy: -0.5,
        athenYy: 1,
        athenX0: 200,
        athenY0: 200
    }
})(AthensForm);

export default athensForm;
