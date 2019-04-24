import React from 'react';
import { connect } from 'react-redux';
import { getTemplateByName } from "../store/actions/template";

class CreateDocument extends React.PureComponent {

    componentDidMount() {
        this.props.getTemplateByName(this.props.params.templateName);
    }

    render() {
        const documentForm = this.props.template ?
            this.props.template : null;

        return (
            <div className="container">
                <h3>Create Document</h3>
                <div>{documentForm}</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
   template: state.template.templates,
});

const mapDispatchToProps = dispatch => ({
   getTemplateByName: templateName => dispatch(getTemplateByName(templateName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDocument);