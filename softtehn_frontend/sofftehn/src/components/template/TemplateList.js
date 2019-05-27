import React from 'react';
import {connect} from "react-redux";
import TemplateRows from './templateRows';

import { getTemplates } from "../../store/actions/template";
import SearchTemplate from "./searchTemplate";

class TemplateList extends React.PureComponent {

    componentDidMount() {
        this.props.getTemplates();
    }

    render() {
        return (
            <div>
                <SearchTemplate/>
                <TemplateRows templates={this.props.templates}/>
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