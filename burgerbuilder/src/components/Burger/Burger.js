import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

    //we are doing this because as it is getting object of ingredients from state not array
    let transformedIngredients = Object.keys( props.ingredients )   //for converting that ingrdient prop into arrray
        //here transformedIngredients will be an array containing salad,bacon,cheese,meet as elements of array
        //now we are iterating through the whole array and this igKey is represeting that particular elmement
        .map( igKey => {
            //now we want to return burgerIngredient 3 times e.g. if the bacon quantity is 3
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {  //this will create an empty array with blank spaces of length the quantity of item 
                //now we will iterate through that array no. of times equal to empty spaces of the length of item's quantity
                // now the type will contain the name of item to be sent 
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;