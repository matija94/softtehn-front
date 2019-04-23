import React, { PureComponent} from 'react';

class AddField extends PureComponent {

    state = {
        name: null,
        type: null,
        active: 0,
    };

    inputName = (e) => {
        const name = e.target.value;
        this.props.updateFields(this.props.id, name, this.state.type);
        this.setState({
          name: e.target.value
      })
    };

    inputType = (e) => {
        const type = e.target.value;
        this.props.updateFields(this.props.id, this.state.name, type);
        this.setState({
            type: e.target.value
        });
    };

    render() {
        return (
        <div className="row">
            <div className="input-field col s4">
                <input id="fieldName" name="fieldName" type="text" className="validate" onChange={this.inputName} />
                <label htmlFor="fieldName">Field name</label>
            </div>
            <div className="input-field col s4">
                <select name="fieldType" onChange={this.inputType}>
                    <option value="" defaultChecked>Choose field type</option>
                    <option value="STRING">String</option>
                    <option value="NUMBER">Number</option>
                    <option value="DATE">Date</option>
                </select>
            </div>
        </div>
        )
    }
}

export default AddField
