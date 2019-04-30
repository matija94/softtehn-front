import React, {PureComponent} from 'react'

class Field extends PureComponent {

    constructor(props) {
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(e) {
        this.props.updateField(e.target.name, e.target.value);
    };

    render() {
        return (
            <div className="input-field col s4">
                <input placeholder={this.props.label}
                       id={this.props.label} name={this.props.label} type={this.props.type} className="validate"
                       onChange={this.onFieldChange}/>
            </div>
        )
    }

};

export default Field
