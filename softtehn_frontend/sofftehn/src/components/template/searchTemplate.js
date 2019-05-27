import React, {PureComponent} from 'react'
import history from '../history';


class SearchTemplate extends PureComponent {

    constructor(props) {
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.searchTemplate = this.searchTemplate.bind(this);
    }

    state = {
      templateName: null,
    };

    onFieldChange(e) {
        this.setState({templateName: e.target.value});
    };

    searchTemplate() {
        history.push(`/template/${this.state.templateName}`);
    }
    render() {
        return (
            <div className="input-field col s4">
                <input placeholder="template name"
                       name="searchTemplate"
                       type="text" className="validate"
                       onChange={this.onFieldChange}
                />
                <button className="btn waves-effect waves-light"
                        onClick={this.searchTemplate}
                        type="button">
                    Search Template
                </button>
            </div>
        )
    }

};

export default SearchTemplate;
