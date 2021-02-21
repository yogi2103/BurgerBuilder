import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        },
        loading:false
    }

    orderHandler=(event)=>{
        event.preventDefault();     //otherwise this page will reload on cliking the order button
        console.log(this.props.ingredients);

        alert('Madafaka! Have the best burger of your life meat good, cream good...');
        this.setState({loading:true});
        const order={
            ingredients:this.props.ingredients,
            price:this.props.price,
            customer:{
                name: 'Yogi',
                email:'x@gmail.com'
            },
            deliveryMethod:'fastest'
        }
        axios.post('/orders.json',order)
            .then(Response=>{
                this.setState({loading:false,orderable:false});
                console.log(Response);
                this.props.history.push('/');
            })
            .catch(err=>{
                this.setState({loading:false,orderable:false});
                console.log(err);
            })

    }

    render(){
        let form=(
            <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your nemae"></input>
                    <input className={classes.Input} type="email" name="email" placeholder="Your mail"></input>
                    <input className={classes.Input} type="text" name="stree" placeholder="Stree"></input>
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal code"></input>
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                </form>
        );
        if(this.state.loading){
            form= <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}
export default ContactData;