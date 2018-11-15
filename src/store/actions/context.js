import { SET_CONTEXT } from "./actionTypes";

export const setContext = context => {
    return {
        type: SET_CONTEXT,
        context: context
    };
};
