import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
class ContactData extends Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        }
    }

    orderHandler=(event)=>{
        event.preventDefault();     //otherwise this page will reload on cliking the order button
        console.log(this.props.ingredients);
    }

    render(){
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your nemae"></input>
                    <input className={classes.Input} type="email" name="email" placeholder="Your mail"></input>
                    <input className={classes.Input} type="text" name="stree" placeholder="Stree"></input>
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal code"></input>
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
            </div>
        );
    }
}
export default ContactData;