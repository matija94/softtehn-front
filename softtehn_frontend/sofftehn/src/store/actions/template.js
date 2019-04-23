export const ActionTypes = {
    SAVE_TEMPLATE: 'SAVE_TEMPLATE',
    CREATE_TEMPLATE: 'CREATE_TEMPLATE',
};

export const saveTemplate = params => ({
    type: ActionTypes.SAVE_TEMPLATE,
    params,
});