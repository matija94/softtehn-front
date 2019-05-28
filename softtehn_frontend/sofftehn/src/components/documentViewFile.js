import React, { Component } from 'react'
import { connect } from 'react-redux';

class DocumentViewFile extends Component {

    showPDF(pdf) {
        const file = new Blob(
            [pdf],
            {type: 'application/pdf'});
        const fileURL = window.URL.createObjectURL(file);
        let a = document.createElement('a');
        a.href = fileURL;
        a.download = 'file.pdf';
        a.click();
    }

    render() {
        return (
            <div className="container">
                <button onClick={() => this.showPDF(this.props.data)}>Preview</button>
            </div>

        )
    }

}

const mapStateToProps = state => ({
    data: state.document.data,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentViewFile);