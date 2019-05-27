import { put, takeEvery } from 'redux-saga/effects';

import { ActionTypes as TemplateActionTypes } from '../store/actions/template';
import { ActionTypes as DocumentActionTypes } from '../store/actions/document';
import TemplateService from './template-service';

import history from '../components/history';

function* saveTemplate(action) {
    try {
        const template = yield TemplateService.saveTemplate(action.params);
        yield put({type: TemplateActionTypes.CREATE_TEMPLATE, template});
        history.push('/');
    } catch (e) {
        console.log("REQUEST FAILED");
    }
}

function* getTemplates(action) {
    try {
        const templates = yield TemplateService.getTemplates();
        yield put({type: TemplateActionTypes.SET_TEMPLATES, templates});
    } catch (e) {
        console.log("REQUEST FAILED");
    }
}

function* getTemplateByName(action) {
    try {
        const template = yield TemplateService.getTemplateByName(action.templateName);
        console.log("TEMPLATE===", template);
        yield put({type: DocumentActionTypes.SET_TEMPLATE, templates: template});
    } catch (e) {
        console.log("REQUEST FAILED");
    }

}

export default function* templateSaga() {
    yield takeEvery(TemplateActionTypes.SAVE_TEMPLATE, saveTemplate);
    yield takeEvery(TemplateActionTypes.GET_TEMPLATES, getTemplates);
    yield takeEvery(TemplateActionTypes.GET_TEMPLATE_BY_NAME, getTemplateByName);
}