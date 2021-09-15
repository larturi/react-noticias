/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './Headers.module.css';


export const Header = ({ titulo }) => {
    return (
        <nav className="nav-wrapper light-blue darken-3">
             <a href="#" className={`${styles.brandLogo} center`}>{ titulo }</a>
        </nav>
    )
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
};
