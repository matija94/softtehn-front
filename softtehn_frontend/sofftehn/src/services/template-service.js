import ApiHelper from './api-helper';

const resourceUrl = 'template';

class TemplateService{

    getTemplateByName(templateName) {
        return  ApiHelper.get(`${resourceUrl}/${templateName}`)
            .then(response => response.data)
            .catch((e) => {
                throw e
            });
    }

    getTemplates() {
        return ApiHelper.get(`${resourceUrl}`)
            .then(response => response.data)
            .catch((e) => {
                throw e
            })
    }

    saveTemplate(params) {
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
