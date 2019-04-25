import React from 'react';
import { connect } from 'react-redux';
import { getTemplateByName } from "../../store/actions/template";
import Field from "./Field";

class CreateDocument extends React.PureComponent {

    state = {

    };

    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.getTemplateByName(params.templateName);
    }

    renderDocumentForm() {
        if (this.props.template) {
            console.log("RENDER DOC===", this.props.template);
            return (<div>
                    <p>{this.props.template.name}</p>
                    {this.props.template.templateFields.map(t => {
                        return <Field key={t.templateFieldId}
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
   template: state.document.template,
});

const mapDispatchToProps = dispatch => ({
   getTemplateByName: templateName => dispatch(getTemplateByName(templateName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDocument);