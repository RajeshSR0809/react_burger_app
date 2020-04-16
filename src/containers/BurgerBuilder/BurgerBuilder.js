import React, { Component }  from 'react';
import Aux from '../../hoc/auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/buildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 0.5,
    meat: 1.3,
    bacon:0.7,
    cheese: 0.4  
}
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon:0,
            cheese: 0
        },
        totalPrice: 0,
        purchaseable: false,
        purchasing: false
    }

    isPurchaseable(totalPrice) {
        return totalPrice.toFixed(2) > 0.00;
    }
    addIngredientHandler = (type) => {
        const ingredients = { ...this.state.ingredients };
        ingredients[type] = ingredients[type] + 1;
        const totalPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState({ingredients,totalPrice, purchaseable: this.isPurchaseable(totalPrice) })
    }
    removeIngredientHandler = (type) => {
        try {
            const ingredients = { ...this.state.ingredients };
            ingredients[type] = ingredients[type] - 1;
            const totalPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
            if(ingredients[type] >= 0)      this.setState({ingredients,totalPrice, purchaseable: this.isPurchaseable(totalPrice)});
            else                            throw new Error();               
        } catch (error) {
            console.log('negative value');
        }
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }
    modalClose = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        console.log('continue');
    };
    purchaseCancelHandler = () => {
        console.log('cancel');
    }
    render(){
        return (
            <Aux>
                <Modal 
                    modalClose={this.modalClose} 
                    show={this.state.purchasing}>
                        <OrderSummary 
                            ingredients={this.state.ingredients}
                            purchaseContinueHandler={this.purchaseContinueHandler}
                            purchaseCancelHandler={this.purchaseCancelHandler}
                            totalPrice={this.state.totalPrice}
                        ></OrderSummary>
                    </Modal>
                <div><Burger ingredients= {this.state.ingredients}></Burger></div>
                <div>
                    <BuildControls 
                        purchaseHandler={this.purchaseHandler} 
                        purchaseable={this.state.purchaseable} 
                        totalPrice={ this.state.totalPrice } 
                        disable={this.state.ingredients} 
                        add={this.addIngredientHandler} 
                        remove={this.removeIngredientHandler}>
                    </BuildControls>
                </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;