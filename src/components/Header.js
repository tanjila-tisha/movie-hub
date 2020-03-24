import React from 'react';
import {
    Link
} from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">
            <h1 className="heading">
                <Link to={"/"} className="link-color">{props.heading}</Link>
            </h1>
        </div>
    );
};

export default Header;
