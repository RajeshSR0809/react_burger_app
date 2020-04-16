import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
    const sideDrawerToggleHandler = props.sideDrawerToggle;
    return(
        <header className={classes.Toolbar}>
            <div onClick={sideDrawerToggleHandler}>MENU</div>
            <div className={classes.Logo}>
                <Logo></Logo>
            </div>
            <nav className={classes.Desktop}><NavigationItems></NavigationItems></nav>
        </header>
    );
};

export default Toolbar;