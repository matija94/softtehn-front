import { ActionTypes } from "../actions/user";

const initState = {};

const userReducer = (state = initState, action) => {
    console.log("ACTION===", action);
    switch (action.type) {
        case ActionTypes.USER_LOGGED_IN:
            return {
                user: action.user,
            };
    
        case ActionTypes.USER_LOGGED_OUT:
            return {
                user: null,
            };

        default:
            return state;
    }

};

export default userReducer;