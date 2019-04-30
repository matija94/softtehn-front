import React from 'react';
import { connect } from 'react-redux';
import { getTemplateByName } from "../../store/actions/template";
import { saveDocument } from "../../store/actions/document";
import Field from "./Field";

class CreateDocument extends React.PureComponent {

    constructor(props) {
        super(props);
        this.updateField = this.updateField.bind(this);
        this.saveDocument = this.saveDocument.bind(this);
    }

    state = {};

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.getTemplateByName(params.templateName);
    }

    initState() {
        this.state.templateName = this.props.template.name;
        this.state.data = {};
        this.props.template.templateFields.forEach(t => {
            this.state.data[t.name] = {type: t.type, value: null}
        })
    }

    updateField(name, value) {
        this.state.data[name].value = value;
    }

    saveDocument() {
        this.props.saveDocument(this.state);
    }

    renderDocumentForm() {
        if (this.props.template) {
            this.initState();
            return (<div>
                    <p>{this.props.template.name}</p>
                    {this.props.template.templateFields.map(t => {
                        return <Field key={t.templateFieldId} label={t.name} updateField={this.updateField}
                                      type={t.type === 'STRING' ? 'text' : t.type.toLowerCase()}/>
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                <h3>Create Document</h3>
                <div>{this.renderDocumentForm()}</div>
                <button id={"saveDocument"} className="btn waves-effect waves-light"
                        onClick={this.saveDocument} type="button">
                    Save document
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
   template: state.document.template,
});

const mapDispatchToProps = dispatch => ({
    getTemplateByName: templateName => dispatch(getTemplateByName(templateName)),
    saveDocument: params => dispatch(saveDocument(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDocument);