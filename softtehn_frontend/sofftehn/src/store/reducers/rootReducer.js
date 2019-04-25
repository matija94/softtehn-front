import { combineReducers } from "redux";
import userReducer from "./userReducer";
import templateReducer from "./templateReducer";
import documentReducer from './documentReducer';

const rootReducer = combineReducers({
    user: userReducer,
    template: templateReducer,
    document: documentReducer,
});

export default rootReducer;