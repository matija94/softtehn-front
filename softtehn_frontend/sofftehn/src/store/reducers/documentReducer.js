import { ActionTypes } from "../actions/document";

const initState = {};

const documentReducer = (state = initState, action) => {

    switch (action.type) {
        case ActionTypes.SET_TEMPLATE:
            return {
                template: action.templates,
            };
        case ActionTypes.SET_DOCUMENTS:
            return {
                documents: action.documents,
            };
        default:
            return state;
    }

};

export default documentReducer;