import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const Navigation = (props) => {
    console.log("NAV PROPS===", props);
    return (
        <nav>
            <div className="nav-wrapper">
                <NavLink className="brand-logo" exact to="/">Logo</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/template">Template</NavLink>
                    </li>
                    <li>
                        <NavLink to="/templateList">Template List</NavLink>
                    </li>
                    <li>
                        <div className="dropdown">
                            <button className="button button-lg hover-extend">
                                <i className="fa fa-user" /> {props.user}
                            </button>
                            <div className="dropdown-content">
                                <button className="button button-md" onClick={props.logout}>
                                    <i className="fa fa-power-off" /> Logout
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )

};

export default Navigation;