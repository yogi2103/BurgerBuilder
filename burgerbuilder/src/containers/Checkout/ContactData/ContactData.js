import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component{

    state={
        orderForm:{
                name: {
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Your name'
                    },
                    value:''
                },
                email:{
                    elementType:'input',
                    elementConfig:{
                        type:'email',
                        placeholder:'Your email'
                    },
                    value:''
                },
                deliveryMethod:{
                    elementType:'select',
                    elementConfig:{
                        options:[
                            {
                                value:'fastest', displayValue:'Fastest'
                            },
                            {
                                value:'cheapest', displayValue:'Cheapest'
                            }
                        ]
                    },
                    value:''
                }
        },
        loading:false 
    }

    // state={
    //     name:'',
    //     email:'',
    //     address:{
    //         street:'',
    //         postalCode:''
    //     },
    //     loading:false
    // }

    orderHandler=(event)=>{
        event.preventDefault();     //otherwise this page will reload on cliking the order button
        console.log(this.props.ingredients);

        alert('Madafaka! Have the best burger of your life meat good, cream good...');
        this.setState({loading:true});
        const order={
            ingredients:this.props.ingredients,
            price:this.props.price
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

    inputChangeHandler=(event,inputIdentifier)=>{
        console.log(event.target.value);
        const updatedOrderForm={...this.state.orderForm};   //it will not deep copy the all inside elements

        const updatedFormElement={...updatedOrderForm[inputIdentifier]};
        updatedFormElement.value=event.target.value;
        updatedOrderForm[inputIdentifier]=updatedFormElement;
        this.setState({orderForm:updatedOrderForm});

    }

    render(){
        const formElementsArray=[];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]
            })
        }
        let form=(
            <form>
                    {/* <Input elementType="..."  elementConfig="...." value="..." placeholder="Your name" /> */}
                    {formElementsArray.map(formElement=>{
                        return <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value}
                        changed={(event)=>this.inputChangeHandler(event,formElement.id)}
                        />
                    })}

                    {/* <Input inputtype="input" type="email" name="email" placeholder="Your mail" />
                    <Input inputtype="input" type="text" name="stree" placeholder="Stree" />
                    <Input inputtype="input" type="text" name="postal" placeholder="Postal code" />
                    <Button btnType="Success" clicked={this.orderHandler}>Order</Button> */}
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