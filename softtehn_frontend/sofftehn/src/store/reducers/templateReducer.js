import { ActionTypes } from "../actions/template";

const initState = {};

const templateReducer = (state = initState, action) => {

    switch (action.type) {
        case ActionTypes.CREATE_TEMPLATE:
            console.log("CREATED TEMPLATE");
            return {
              ...state  
            };
    
        default:
            return state;
    }

};

export default templateReducer;