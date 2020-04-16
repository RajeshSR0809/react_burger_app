import React from 'react';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    const children = props.children;
    const active = props.active
    const link = props.link;
    return(
    <li className={classes.NavItem}><a href={link} className={ active ? active : null }>{children}</a></li>
    );
};
export default NavigationItem;