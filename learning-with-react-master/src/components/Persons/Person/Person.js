import React,{Component} from 'react';
import Proptypes from 'prop-types';
import Aux from '../../../hoc/Auxilliary';
import AuthContext from '../../../context/auth-context';
class Person extends Component{

    constructor(props){
        super(props);
        this.inputElementRef=React.createRef();
    }

     static contextType=AuthContext;             //only availble for claas based

    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render(){
        console.log('[Person.js] rendering...');
        return <Aux>
            {this.context.authenticated ? <p>Authenticated!</p>: <p>Please log In</p>}
            { /* it takes function as child */}
             {/* <AuthContext.Consumer>                                                                       
                {(context)=>context.authenticated ? <p>Authenticated!</p>: <p>Please log In</p>}
                </AuthContext.Consumer> */}
            <p onClick={this.props.click}>I'm {this.props.name} and my age is {this.props.age} years!</p>
            <p>{this.props.children}</p>    
            <input
            // ref={(inputEl)=>{this.inputElement=inputEl}} 
            ref={this.inputElementRef}
            type="text" 
            onChange={this.props.changed}
            value={this.props.name}
            />
            </Aux>
    }
}

//it is helpful to know what kind of values/function should a variable have

Person.propTypes={
    click:Proptypes.func,
    name:Proptypes.string,
    age:Proptypes.number,
    changed:Proptypes.func
  };

export default Person;