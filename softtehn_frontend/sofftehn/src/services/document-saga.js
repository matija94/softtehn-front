import { put, takeEvery } from 'redux-saga/effects';

import { ActionTypes as DocumentActionTypes } from '../store/actions/document';
import DocumentService from './document-service';

import history from '../components/history';

function* saveDocument(action) {
    try {
        const document = yield DocumentService.saveDocument(action.params);
        history.push(`/document/${document.templateName}/list`);
    } catch (e) {
        console.log("REQUEST FAILED");
    }
}

function* getDocuments(action) {
    try {
        const documents = yield DocumentService.getDocuments(action.templateName);
        yield put({type: DocumentActionTypes.SET_DOCUMENTS, documents});
    } catch (e) {
        console.log("REQUEST FAILED");
    }
}

export default function* templateSaga() {
    yield takeEvery(DocumentActionTypes.SAVE_DOCUMENT, saveDocument);
    yield takeEvery(DocumentActionTypes.GET_DOCUMENTS, getDocuments);
}