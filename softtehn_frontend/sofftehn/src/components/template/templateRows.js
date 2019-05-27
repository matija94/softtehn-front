import React from "react";
import history from '../history';

function TemplateRows(props) {
    const templateRows =
        props.templates ?
            props.templates.map(template => {
                return (
                    <tr key={template.name}>
                        <td>
                            {template.name}
                        </td>
                        <td>
                            <button className="btn btn-primary"
                                    onClick={() => history.push(`/document/${template.name}/new`)}>
                                Create
                            </button>
                        </td>
                        <td>
                            <button className={"btn btn-primary"}
                                    onClick={() => history.push(`/document/${template.name}/list`)}>
                                List
                            </button>
                        </td>
                    </tr>
                )
            }) : null;


    return (
        <div className="container">
            <h3>Templates</h3>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Create Document</th>
                    <th>List Document</th>
                </tr>
                </thead>
                <tbody>
                {templateRows}
                </tbody>
            </table>
        </div>
    )
}

export default TemplateRows;