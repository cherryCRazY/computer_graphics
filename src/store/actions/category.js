import * as actionTypes from "./actionTypes";

export const setCategory = category => {
    return {
        type: actionTypes.SET_CATEGORY,
        category: category
    };
};
