import CustomInput from "../../../../UI/CustomInput/CustomInput";
import { reduxForm } from "redux-form";

import React, { PureComponent } from "react";
import classes from "./EuklidForm.module.css";

class EuklidForm extends PureComponent {
    translateHandler = formProps => {
        const { translateX, translateY } = formProps;
        const translate = this.props.clicked().translate;
        translate(translateX, translateY);
    };
    rotateHandler = formProps => {
        const { rotateAngle, rotateX, rotateY } = formProps;
        const rotate = this.props.clicked().rotate;
        rotate(+rotateAngle, +rotateX, +rotateY);
    };
    render() {
        const { handleSubmit, clicked } = this.props;
        console.log(clicked());
        return (
            <div>
                <form name="translate">
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
                            type="submit"
                            className="button"
                            onClick={handleSubmit(this.translateHandler)}
                        >
                            Translate
                        </button>
                    </div>
                </form>
                <form name="rotete">
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
                            onClick={handleSubmit(this.rotateHandler)}
                        >
                            Rotate
                        </button>
                    </div>
                </form>
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
