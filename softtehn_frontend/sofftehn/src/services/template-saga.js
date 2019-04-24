import { put, takeEvery } from 'redux-saga/effects';

import { ActionTypes } from '../store/actions/template';
import TemplateService from './template-service';

import history from '../components/history';

function* saveTemplate(action) {
    try {
        const template = yield TemplateService.saveTemplate(action.params);
        yield put({type: ActionTypes.CREATE_TEMPLATE, template});
        history.push('/');
    } catch (e) {
        console.log("REQUEST FAILED");
    }
}

function* getTemplates(action) {
    try {
        const templates = yield TemplateService.getTemplates();
        yield put({type: ActionTypes.SET_TEMPLATES, templates});
    } catch (e) {
        console.log("REQUEST FAILED");
    }
}

function* getTemplateByName(action) {
    try {
        const template = yield TemplateService.getTemplateByName(action.templateName);
        yield put({type: ActionTypes.SET_TEMPLATES, templates: template});
    } catch (e) {
        console.log("REQUEST FAILED");
    }

}

export default function* templateSaga() {
    yield takeEvery(ActionTypes.SAVE_TEMPLATE, saveTemplate);
    yield takeEvery(ActionTypes.GET_TEMPLATES, getTemplates);
    yield takeEvery(ActionTypes.GET_TEMPLATE_BY_NAME, getTemplateByName);
}