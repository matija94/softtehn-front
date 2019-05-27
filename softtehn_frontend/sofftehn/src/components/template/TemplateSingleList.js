import React from 'react';
import {connect} from "react-redux";
import TemplateRows from './templateRows';

import { getTemplateByName } from "../../store/actions/template";

class TemplateSingleList extends React.PureComponent {

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log("TEMPLATE SINGLE LIST MOUNT==", params.templateName);
        this.props.getTemplateByName(params.templateName);
    }

    render() {

        const templates = [];
        if (this.props.template) {
            templates.push(this.props.template);
        }
        console.log("TEMPLATES==", templates);
        return (
            <div>
                <TemplateRows templates={templates}/>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    template: state.document.template,
});

const mapDispatchToProps = dispatch => ({
    getTemplateByName: params => dispatch(getTemplateByName(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateSingleList);