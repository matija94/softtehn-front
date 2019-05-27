import React, { Component } from 'react'
import { connect } from 'react-redux';

class DocumentViewFile extends Component {

    showPDF(pdf) {
        console.log("PDF DATA===", pdf);
        const file = new Blob(
            [pdf],
            {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    }

    render() {
        return (
            <div className="container">
                <button onClick={() => this.showPDF(this.props.data)}>PREVIEW</button>
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