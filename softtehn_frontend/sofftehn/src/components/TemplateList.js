import React from 'react';
import {connect} from "react-redux";
import history from './history';

import { getTemplates } from "../store/actions/template";

class TemplateList extends React.PureComponent {

    componentDidMount() {
        this.props.getTemplates();
    }

    createDocument(templateName) {
        history.push(`/document/${templateName}/new`);
    }

    listDocuments(templateName) {
        history.push(`/document/${templateName}/list`)
    }

    render() {
        const templateRows =
          this.props.templates ?
              this.props.templates.map(template => {
                  return (
                      <tr key={template.name}>
                        <td>{template.name}</td>
                        <td><button className="btn btn-primary"
                                    onClick={() => this.createDocument(template.name)}>Create</button></td>
                        <td><button className={"btn btn-primary"}
                                    onClick={() => this.listDocuments(template.name)}>List</button></td>
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
                            <th>Create Document</th>
                            <th>List Document</th>
                        </tr>
                    </thead>
                    <tbody>
                        {templateRows}
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    templates: state.template.templates,
});

const mapDispatchToProps = dispatch => ({
    getTemplates: params => dispatch(getTemplates(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);