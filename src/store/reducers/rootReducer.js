import context from "./context";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    form: formReducer,
    context: context
});

export default rootReducer;
