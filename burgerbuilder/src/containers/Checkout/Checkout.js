import React,{ Component } from "react";
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
class Checkout extends Component{
    state={
        ingredients:null,
        price:0
    }
    componentWillMount(){
        const query=new URLSearchParams(this.props.location.search);
        const ingredients={};
        let price=0;
        for(let params of query.entries()){
            // ['Salad',1]
            if(params[0]==='price'){
                price=params[1];
            }
            else{
                ingredients[params[0]]=+params[1];
            }
        }
        this.setState({ingredients:ingredients, totalPrice:price});
    }

    checkoutCancelled=()=>{
        this.props.history.goBack();
    }

    checkoutContinued=()=>{
        this.props.history.replace('/checkout/contact-data');
    }


    render(){
        return<div>
            <CheckoutSummary 
            ingredients={this.state.ingredients}
            checkoutCancelled={this.checkoutCancelled}
            checkoutContinued={this.checkoutContinued}
            />
            <Route 
            path={this.props.match.path + '/contact-data'}  
            render={(props)=><ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />} />
            {/* <Route path={this.props.match.path + '/contact-data'} component={ContactData} /> */}
        </div>
    }
}

export default Checkout;