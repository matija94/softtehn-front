export const ActionTypes = {
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGOUT: 'USER_LOGOUT',
    USER_LOGGED_IN: 'USER_LOGGED_IN',
    USER_LOGGED_OUT: 'USER_LOGGED_OUT'
};

export const login = (token, userEmail) => ({
    type: ActionTypes.USER_LOGIN,
    token,
    userEmail,
});

export const logout = () => ({
    type: ActionTypes.USER_LOGOUT,
});
