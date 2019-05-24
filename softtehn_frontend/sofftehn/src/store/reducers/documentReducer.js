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
        case ActionTypes.VIEW_DOCUMENT_FILE:
            return {
              data: action.data
            };
        default:
            return state;
    }

};

export default documentReducer;