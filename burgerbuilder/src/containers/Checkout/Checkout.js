import React,{ Component } from "react";
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
class Checkout extends Component{
    state={
        ingredients:{
            salad:1,
            meat:1,
            cheese:1,
            bacon:1
        }
    }
    componentDidMount(){
        const query=new URLSearchParams(this.props.location.search);
        const ingredients={};
        for(let params of query.entries()){
            // ['Salad',1]
            ingredients[params[0]]=+params[1];
        }
        this.setState({ingredients:ingredients});
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
            render={()=><ContactData ingredients={this.state.ingredients} />} />
            {/* <Route path={this.props.match.path + '/contact-data'} component={ContactData} /> */}
        </div>
    }
}

export default Checkout;