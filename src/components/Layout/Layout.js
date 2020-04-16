import React , { Component } from 'react';
import Aux from '../../hoc/auxilary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideBar: false
    }

    sideBarToggleHandler = () => {
        this.setState(( prevState ) => {
            return { showSideBar: !prevState.showSideBar}
        });
    }
    render(){
        return (
            <Aux>
                <Toolbar sideDrawerToggle={this.sideBarToggleHandler}></Toolbar>
                <SideDrawer showSideBar={this.state.showSideBar} toggle={this.sideBarToggleHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
} 

export default Layout;