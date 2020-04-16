import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    const btnType = props.btnType;
    const clickHandler = props.clickHandler;
    return (
    <button onClick={clickHandler} className={[classes.Button, classes[btnType]].join(' ')} >{props.children}</button>
    );
};

export default Button;