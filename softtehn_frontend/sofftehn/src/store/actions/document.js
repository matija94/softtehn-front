export const ActionTypes = {
    SET_TEMPLATE: 'SET_TEMPLATE',
    SAVE_DOCUMENT: 'SAVE_DOCUMENT',
    UPLOAD_DOCUMENT: 'UPLOAD_DOCUMENT',
    GET_DOCUMENTS: 'GET_DOCUMENTS',
    SET_DOCUMENTS: 'SET_DOCUMENTS',
    DOWNLOAD_DOCUMENT_FILE: 'DOWNLOAD_DOCUMENT_FILE',
    VIEW_DOCUMENT_FILE: 'VIEW_DOCUMENT_FILE',
};

export const saveDocument = params => ({
   type: ActionTypes.SAVE_DOCUMENT,
   params
});

export const getDocuments = templateName => ({
    type: ActionTypes.GET_DOCUMENTS,
    templateName
});

export const uploadDocument = params => ({
    type: ActionTypes.UPLOAD_DOCUMENT,
    params
});

export const downloadDocumentFile = documentId => ({
    type: ActionTypes.DOWNLOAD_DOCUMENT_FILE,
    documentId
});

export const viewDocumentFile = data => ({
    type: ActionTypes.VIEW_DOCUMENT_FILE,
    data
});