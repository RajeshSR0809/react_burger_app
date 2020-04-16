import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = (props) => {
    const ingredients = props.ingredients;
    const transformedIngredieants = Object.keys(ingredients)
        .map( ig => [...Array(ingredients[ig])]
            .map( (_, i) => <BurgerIngredient key={ig + i} type={ig}></BurgerIngredient>) 
        )
        .reduce((acc,cur) => acc.concat(cur), []);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {transformedIngredieants.length>0? transformedIngredieants : <p>Please add ingredients</p>}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    );
}

export default burger;