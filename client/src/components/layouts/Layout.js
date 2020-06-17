import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow mb-5">
          <a className="navbar-brand" href="/">
            News
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <span className="navbar-text ml-auto">
              <a href="/" className="mr-1">Home</a>
              <a href="/about" >About</a>
            </span>
          </div>
        </nav>
        <div className="container">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
