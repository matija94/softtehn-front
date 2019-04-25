import { ActionTypes } from "../actions/template";

const initState = {};

const templateReducer = (state = initState, action) => {

    switch (action.type) {
        case ActionTypes.CREATE_TEMPLATE:
            return {
              ...state  
            };
        case ActionTypes.SET_TEMPLATES:
            return {
              templates: action.templates,
            };
        default:
            return state;
    }

};

export default templateReducer;