import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
    <ul className={classes.NavItems}>
        <NavigationItem link='/' active='active'>Burger Builder</NavigationItem>
        <NavigationItem link='/' >Checkout</NavigationItem>
    </ul>        
    );
};

export default NavigationItems;