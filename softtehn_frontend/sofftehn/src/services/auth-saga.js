import { put, takeEvery } from 'redux-saga/effects';
/* actions */
import { ActionTypes } from '../store/actions/user';
import BaseService from "./BaseService";

function* login(action) {
    try {
        const user = yield BaseService.verifyUser(action.token, action.userEmail);
        yield put({type: ActionTypes.USER_LOGGED_IN, user});
    } catch (error) {
        yield put({type: 'REQUEST_FAILED', error});
    }
}

function* logout() {
    try {
        yield put({type: ActionTypes.USER_LOGGED_OUT})
    } catch (error) {
        yield put({type: 'REQUEST_FAILED', error});
    }
}




export default function* authSaga() {
    yield takeEvery(ActionTypes.USER_LOGIN, login);
    yield takeEvery(ActionTypes.USER_LOGOUT, logout);
}


