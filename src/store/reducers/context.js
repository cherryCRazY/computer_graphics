import * as actionTypes from "../actions/actionTypes";

const initialState = {
    context: null,
    category: null,
    input: {
        draw: {
            type: "number"
        },
        transform: {}
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CONTEXT: {
            return {
                ...state,
                context: action.context
            };
        }
        case actionTypes.SET_CATEGORY: {
            return {
                ...state,
                category: action.category
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
