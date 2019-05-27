export const ActionTypes = {
    SAVE_TEMPLATE: 'SAVE_TEMPLATE',
    CREATE_TEMPLATE: 'CREATE_TEMPLATE',
    GET_TEMPLATES: 'GET_TEMPLATES',
    SET_TEMPLATES: 'SET_TEMPLATES',
    GET_TEMPLATE_BY_NAME: 'GET_TEMPLATE_BY_NAME',
};

export const saveTemplate = params => ({
    type: ActionTypes.SAVE_TEMPLATE,
    params,
});

export const getTemplateByName = templateName => ({
    type: ActionTypes.GET_TEMPLATE_BY_NAME,
    templateName
});

export const getTemplates = params => ({
    type: ActionTypes.GET_TEMPLATES,
    params
});
