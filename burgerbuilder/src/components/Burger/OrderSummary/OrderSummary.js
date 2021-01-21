import React from 'react';
import Aux from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';

const orderSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredients)
        .map(igKey=>{
            return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>
        });
    return(
        <Aux>
            <h3>Your Order!</h3>
            <p>Your Burger has:-</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout? <span>Your total bill is: ${props.totalPrice}</span></p>
            <Button btnType="Danger" clicked={props.orderCanceled}>CANCEL</Button>
            <Button btnType="Success"clicked={props.orderContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;