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

function* uploadDocument(action) {
    try {
        yield DocumentService.uploadDocument(action.params);
    } catch (e) {
        console.log("REQUEST FAILED");
    }
}

function* downloadDocumentFile(action) {
    try {
        const data = yield DocumentService.getDocumentFile(action.documentId);
        yield put({type: DocumentActionTypes.VIEW_DOCUMENT_FILE, data: data});
        history.push(`/document/${action.documentId}/file`);
    }catch (e) {
        console.log("REQUEST FAILED");
    }
}

export default function* templateSaga() {
    yield takeEvery(DocumentActionTypes.SAVE_DOCUMENT, saveDocument);
    yield takeEvery(DocumentActionTypes.GET_DOCUMENTS, getDocuments);
    yield takeEvery(DocumentActionTypes.UPLOAD_DOCUMENT, uploadDocument);
    yield takeEvery(DocumentActionTypes.DOWNLOAD_DOCUMENT_FILE, downloadDocumentFile);
}