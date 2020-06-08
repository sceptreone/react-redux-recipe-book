import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
    const {branding} = props;

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fa fa-home" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/recipe/add" className="nav-link">
                  <i className="fa fa-plus" /> Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fa fa-question" /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

Header.defaultProps = {
    branding: 'Recipe Book'
};

Header.prototype = {
    brand: PropTypes.string.isRequired
};

export default Header;