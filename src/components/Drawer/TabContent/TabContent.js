import React from "react";
import Aux from "../../../hoc/Auxiliary";
import DrawContent from "./DrawContent/DrawContent";
import TransformContent from "./TransformContent/TransformContent";
import ArhimedContent from "./ArhimedContent/ArhimedContent";

const TabContent = ({ category, clicked }) => {
    let content = "";
    switch (category) {
        case "draw": {
            content = <DrawContent clicked={clicked} />;
            break;
        }
        case "transform": {
            content = <TransformContent clicked={clicked} />;
            break;
        }
        case "arhimed": {
            content = <ArhimedContent clicked={clicked} />;
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
