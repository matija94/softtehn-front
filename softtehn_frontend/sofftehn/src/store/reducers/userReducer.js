import { USER_LOGIN, USER_LOGOUT } from "../actionTypes";

const initState = {};

const userReducer = (state = initState, action) => {

    switch (action.type) {
        case USER_LOGIN:
            console.log("USER LOGIN====", action.userEmail);
            return {
                user: action.userEmail,
            };
    
        case USER_LOGOUT:
            console.log("USER LOGOUT===");
            return {
                ...state
            };

        default:
            return state;
    }

};

export default userReducer;