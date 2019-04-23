import ApiHelper from './api-helper';

const resourceUrl = 'api/template';

class TemplateService{

    getTemplateById(templateId) {
        return  ApiHelper.get(`${resourceUrl}/${templateId}`)
            .then(response => response.data)
            .catch((e) => {
                throw e
            });
    }

    saveTemplate(params) {
        return {};
        return ApiHelper.post(`${resourceUrl}/`, params)
            .then(response => response.data)
            .catch((e) => {
                throw e
            });
    }

    deleteTemplate(templateId) {
        return ApiHelper.remove(`${resourceUrl}/${templateId}`)
            .then(response => response.data)
            .catch((e) => {
                throw e
            });
    }

    updateTemplate(action) {
        return ApiHelper.put(`${resourceUrl}/${action.templateId}`, action.params)
            .then(response => response.data)
            .catch((e) => {
                throw e
            });
    }
}

export default new TemplateService();
