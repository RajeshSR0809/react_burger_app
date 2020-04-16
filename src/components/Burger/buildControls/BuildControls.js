import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './buildControl/BuildControl';

const controls = [
    { label: 'Salad' , type: 'salad'},
    { label: 'Bacon' , type: 'bacon'},
    { label: 'Cheese' , type: 'cheese'},
    { label: 'Meat' , type: 'meat'}
];
const buildControls = (props) => {
    const addHandler = props.add;
    const removeHandler = props.remove;
    const disable = props.disable;
    const totalPrice = props.totalPrice;
    const purchaseable = props.purchaseable;
    const purchaseHandler = props.purchaseHandler;

    return (
    <div className={classes.BuildControls}>
        <p>Current Price<strong>{totalPrice.toFixed(2)}</strong></p>
        {
            controls.map( ctrl => 
                (
                    <BuildControl 
                        add={() => addHandler(ctrl.type)}
                        remove={ () => removeHandler(ctrl.type)}
                        key={ctrl.label} 
                        disable = { disable[ctrl.type] ? false : true }
                        label={ctrl.label}>
                    </BuildControl>
                )
            )
        } 

        <button onClick={purchaseHandler} disabled={!purchaseable} className={classes.OrderButton}>ORDER NOW</button>
    </div>        
    );
}

export default buildControls;