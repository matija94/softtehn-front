import { put, takeEvery } from 'redux-saga/effects';

import { ActionTypes } from '../../store/actions/template';
import TemplateService from '../../services/template-service';

import history from '../history';

function* saveTemplate(action) {
    try {
        const template = yield TemplateService.saveTemplate(action.params);
        yield put({type: ActionTypes.CREATE_TEMPLATE, template});
        history.push('/');
    } catch (e) {
        console.log("REQUEST FAILED");
    }

}

export default function* templateSaga() {
    yield takeEvery(ActionTypes.SAVE_TEMPLATE, saveTemplate);
}