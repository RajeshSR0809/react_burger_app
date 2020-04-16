import React from 'react';
import classes from './Backdrop.module.css';

 const Backdrop = (props) => {
     const show  = props.show;
     const clickHandler = props.clickHandler
     return (
        show ? <div onClick={clickHandler} className={classes.Backdrop}></div> : null 
     );
 };

 export default Backdrop;