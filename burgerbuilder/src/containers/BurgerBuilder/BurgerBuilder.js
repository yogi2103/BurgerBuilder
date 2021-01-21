import React, { Component } from 'react';

import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

//WE ARE DECLARING IT OUT OF CLASS BECAUSE IT'S A CONSTANT
const INGREDIENT_PRICES={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7 
}

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice:0,
        purchasable:false,
        orderable:false
    }

    updatePurchaseState(ingredients){

        //will create an array of the string i.e cheese,salad,meet but we need count
        const sum=Object.keys(ingredients)
        .map(igKey=>{
            return ingredients[igKey]
        })
        .reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchasable: sum>0})
    }

    addIngredientHandler=(type)=>{
        
        //dealing with count
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        
        //dealing with price
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;

        this.setState({ingredients:updatedIngredients,totalPrice:newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler=(type)=>{
        //dealing with count
        const oldCount=this.state.ingredients[type];
        if(oldCount==0){
            return -1;
        }
        const updatedCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        
        //dealing with price
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceAddition;

        this.setState({ingredients:updatedIngredients,totalPrice:newPrice});
        this.updatePurchaseState(updatedIngredients);
    }
    
    //this is for the sake of orderSummary could be visible
    orderHandler=()=>{
        this.setState({orderable:true})
    }

    //so that summary could be removed on clicking anywhere else on window
    cancelOrder=()=>{
        this.setState({orderable:false})
    }

    continueOrder=()=>{
        alert('Madafaka! Have the best burger of your life meat good, cream good...');
    }

    render () {
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }
        return (
            <Aux>
                <Modal show={this.state.orderable} modalClosed={this.cancelOrder}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    orderCanceled={this.cancelOrder}
                    orderContinued={this.continueOrder}
                    totalPrice={this.state.totalPrice}
                    /> 
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                order={this.orderHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;