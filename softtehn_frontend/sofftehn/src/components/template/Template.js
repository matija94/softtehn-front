import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import AddField from './AddField'
import { saveTemplate } from '../../store/actions/template'

class Template extends PureComponent {

  constructor(props) {
    super(props);
    this.updateFields = this.updateFields.bind(this);
    this.saveTemplate = this.saveTemplate.bind(this);
  }

  state = {
    name: null,
    description: null,
    templateFields: [],
    active: 0,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  expandField = (e) => {
    this.setState({
      active: this.state.active + 1
    });
  };

  updateFields(key, name, type) {
    const field = {name, type};
    if (this.state.templateFields.length < key+1) {
      this.state.templateFields.push(field);
    }
    else {
      this.state.templateFields[key] = field;
    }
    console.log("FIELDS===", this.state);
  }

  renderAddFields() {
     let i;
     let fields = [];
     for (i=0; i<this.state.active; i++) {
       fields.push(<AddField id={i} key={i} updateFields={this.updateFields} renderAddFields={this.renderAddFields} expandField={this.expandField}/>)
     }
     return (
         <div>
           {fields}
         </div>
     )
  }

  saveTemplate() {
    const params = {
      name: this.state.name,
      description: this.state.description,
      templateFields: this.state.templateFields,
    };
    this.props.saveTemplate(params);
  }

  render() {    
    return (
      <div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s5">
                <input id="templateName" name="name" type="text" className="validate" onChange={this.onChange} />
                <label htmlFor="templateName">Template name</label>
              </div>
              <div className="input-field col s5">
                <input id="templateDesc" name="description" type="text" className="validate" onChange={this.onChange} />
                <label htmlFor="templateDesc">Description</label>
              </div>
              <div className="input-field col s2">
                <button className="btn waves-effect waves-light" type="button" onClick={this.expandField}>
                  Add field
                </button>
              </div>
            </div>
            {this.renderAddFields()}
          </form>
        </div>
        <div className="input-field col s2">
          <button className="btn waves-effect waves-light" type="button" onClick={this.saveTemplate}>
            Save Template
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  saveTemplate: params => dispatch(saveTemplate(params)),
});

export default connect(null, mapDispatchToProps)(Template);
