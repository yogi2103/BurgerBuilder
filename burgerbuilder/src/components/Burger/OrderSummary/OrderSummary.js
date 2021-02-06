import React,{Component} from 'react';
import Aux from '../../../hoc/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    
    componentDidUpdate(){
        console.log('[OrderSummary] did update');
    }

    render(){
        const ingredientSummary=Object.keys(this.props.ingredients)
        .map(igKey=>{
            return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}</li>
        }); 
        return(
            <Aux>
            <h3>Your Order!</h3>
            <p>Your Burger has:-</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout? <span>Your total bill is: ${this.props.totalPrice}</span></p>
            <Button btnType="Danger" clicked={this.props.orderCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.orderContinued}>CONTINUE</Button>
        </Aux>
        );
    }
}

export default OrderSummary;