import React from 'react';
import classes from './Logo.module.css'
// if we won't import image then webpack will not be aware of this and will help in optimizing the image 
import burgerLogo from '../../assets/images/28.1 burger-logo.png'
const logo=(props)=>{
    return(<div className={classes.Logo} style={{height:props.height}}>
        <img src={burgerLogo} alt="burgerLogo" />
    </div>);
}

export default logo;