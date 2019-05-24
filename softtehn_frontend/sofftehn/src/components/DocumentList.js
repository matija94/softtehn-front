import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDocuments, downloadDocumentFile } from "../store/actions/document";

class DocumentList extends Component {

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.getDocuments(params.templateName);
    }

    downloadDocumentFile(documentId) {
        this.props.downloadDocumentFile(documentId);
    }



    render() {
        const docRows =
            this.props.documents ?
                this.props.documents.map(doc => {
                    return (
                        <tr key={doc.templateName}>
                            <td>{doc.templateName}</td>
                            <td><button className="btn btn-primary"
                                        onClick={() => this.downloadDocumentFile(doc.documentId)}>View</button></td>
                        </tr>
                    )
                }) : null;


        return (
            <div className="container">
                <h3>Templates</h3>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>View</th>
                    </tr>
                    </thead>
                    <tbody>
                    {docRows}
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    documents: state.document.documents,
    data: state.document.data,
});

const mapDispatchToProps = dispatch => ({
    getDocuments: templateName => dispatch(getDocuments(templateName)),
    downloadDocumentFile: documentId => dispatch(downloadDocumentFile(documentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentList);