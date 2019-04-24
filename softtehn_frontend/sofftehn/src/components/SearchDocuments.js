import React, { Component } from 'react'
import { connect } from 'react-redux';
import { findDocumentsByTemplateName } from '../store/templateAction';

class SearchDocuments extends Component {

    state = {
        searchDoc: null
    };

    handleChng = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    render() {
        return (
            <div className="search-wrapper">
                <form onSubmit={() => this.props.loadDocuments(this.state.searchDoc)}>
                    <input placeholder="Search for document" id="searchDoc" name="searchDoc" type="search" onChange={this.handleChng} />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDocuments: (name) => dispatch(findDocumentsByTemplateName(name))
    }
};

export default connect(null, mapDispatchToProps)(SearchDocuments)
