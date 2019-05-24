import React from 'react';
import { connect } from 'react-redux';
import { getTemplateByName } from "../../store/actions/template";
import { saveDocument, uploadDocument } from "../../store/actions/document";
import Field from "./Field";

class CreateDocument extends React.PureComponent {

    constructor(props) {
        super(props);
        this.updateField = this.updateField.bind(this);
        this.saveDocument = this.saveDocument.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    state = {
        file: null,
    };

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
        console.log("CREATE DOC STATE===", this.state);
        this.props.uploadDocument(this.state);
        this.props.saveDocument(this.state);
    }


    onChange(e) {
        this.setState({file:e.target.files[0], fileName:e.target.files[0].name})
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
                <input type="file" onChange={this.onChange} />
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
    uploadDocument: params => dispatch(uploadDocument(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDocument);