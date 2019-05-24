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

    uploadDocument(params) {
        const formData = new FormData();
        formData.append("file", params.file);
        return ApiHelper.post(`${resourceUrl}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
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

    getDocumentFile(documentId) {
        return ApiHelper.get(`${resourceUrl}/${documentId}/file`, {responseType: 'arraybuffer'})
            .then(response => response.data)
            .catch((e) => {
                console.log(e);
                throw e
            })
    }
}

export default new DocumentService();
