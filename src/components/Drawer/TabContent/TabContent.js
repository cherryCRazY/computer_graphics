import React from "react";
import Aux from "../../../hoc/Auxiliary";
import DrawContent from "./DrawContent/DrawContent";
import TransformContent from "./TransformContent/TransformContent";

const TabContent = ({ category, toggle }) => {
    let content = "";
    switch (category) {
        case "draw": {
            content = <DrawContent toggle={toggle} />;
            break;
        }
        case "transform ": {
            content = <TransformContent />;
            break;
        }
        default: {
            content = "";
            break;
        }
    }
    return <Aux>{content}</Aux>;
};

export default TabContent;
