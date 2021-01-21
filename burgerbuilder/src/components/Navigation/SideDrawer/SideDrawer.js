import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilliary';
const sideDrawer=(props)=>{
    return(
        <Aux>
            <Backdrop show/>
        <div className={classes.SideDrawer}>
            <Logo height="11%" />
            <nav>
                <NavigationItem />
            </nav>
        </div>
        </Aux>
    );
}

export default sideDrawer;