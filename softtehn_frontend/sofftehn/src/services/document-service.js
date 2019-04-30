import ApiHelper from './api-helper';

const resourceUrl = 'document';

class DocumentService {

    saveDocument(params) {
        return ApiHelper.post(`${resourceUrl}/`, params)
            .then(response => response.data)
            .catch((e) => {
                throw e
            });
    }

    getDocuments(templateName) {
        return ApiHelper.get(`${resourceUrl}/${templateName}`)
            .then(response => response.data)
            .catch((e) => {
                throw e
            })
    }
}

export default new DocumentService();
