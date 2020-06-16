import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import 'bootstrap';


class Layout extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">News</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Homes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;