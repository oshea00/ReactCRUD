import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = (props) => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Streamy</Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <GoogleAuth/>
            </div>
        </div>
    );
}

// 124399036639-6akfatqsoc41qm3esebk2op8u5gv5929.apps.googleusercontent.com

export default Header;
