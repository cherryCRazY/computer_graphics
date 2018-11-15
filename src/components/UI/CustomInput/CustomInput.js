import React from "react";
import { Field } from "redux-form";
import classes from "./CustomInput.module.css";

const CustomInput = props => {
    return (
        <div className={classes.CustomInput}>
            <div>{props.name}</div>
            <Field
                className={classes.Input}
                name={props.name}
                component="input"
                placeholder={props.placeholder ? props.placeholder : null}
                type={props.type}
            />
        </div>
    );
};

export default CustomInput;
