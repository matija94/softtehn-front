export const ActionTypes = {
    SET_TEMPLATE: 'SET_TEMPLATE',
    SAVE_DOCUMENT: 'SAVE_DOCUMENT',
    GET_DOCUMENTS: 'GET_DOCUMENTS',
    SET_DOCUMENTS: 'SET_DOCUMENTS',
};

export const saveDocument = params => ({
   type: ActionTypes.SAVE_DOCUMENT,
   params
});

export const getDocuments = templateName => ({
    type: ActionTypes.GET_DOCUMENTS,
    templateName
});