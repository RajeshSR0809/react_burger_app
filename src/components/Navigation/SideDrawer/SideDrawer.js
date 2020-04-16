import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/backdrop/Backdrop';
import Aux from '../../../hoc/auxilary';

const SideDrawer = (props) => {
    let sideDrawerClasses = [ classes.SideDrawer, classes.Close];
    if(props.showSideBar){
        sideDrawerClasses = [ classes.SideDrawer, classes.Open];
    }
    return (
        <Aux >
            <BackDrop show={props.showSideBar} clickHandler={props.toggle}/>        
            <div className={sideDrawerClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo></Logo>
                </div>
                <NavigationItems/>
            </div>
        </Aux>
    );
};
export default SideDrawer;