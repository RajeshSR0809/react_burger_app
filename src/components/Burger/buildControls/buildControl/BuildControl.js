import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => {
    const label = props.label;
    const addHandler = props.add;
    const removeHandler = props.remove;
    const disable = props.disable;
    return (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{label}</div>
        <button className={classes.Less} onClick={removeHandler} disabled={disable}>Less</button>
        <button className={classes.More} onClick={addHandler}>More</button>
    </div>
    );
}


export default BuildControl