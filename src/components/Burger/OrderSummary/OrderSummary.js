import React from 'react';
import Aux from '../../../hoc/auxilary';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const totalPrice = props.totalPrice;
    const ingredients = props.ingredients;
    const purchaseCancelHandler = props.purchaseCancelHandler;
    const purchaseContinueHandler = props.purchaseContinueHandler;

const ingredientsSummaryTemplate = Object.keys(ingredients).map( ig => <li key={ig}><span>{ig}</span> : {ingredients[ig]}</li>);
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A yammy burger with below ingredients:</p>
            <ul>
                {ingredientsSummaryTemplate}
            </ul>
            <p>The order price : <strong>{totalPrice.toFixed(2)}</strong></p>
            <Button clickHandler={purchaseCancelHandler} btnType='Danger'>CANCLE</Button>
            <Button clickHandler={purchaseContinueHandler} btnType='Success'>CONTINUE</Button>

        </Aux>
    );
}

export default OrderSummary;