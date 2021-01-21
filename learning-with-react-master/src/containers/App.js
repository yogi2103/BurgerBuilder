import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id:'x',name:'maximilian', age: 28 },
      { id:'y',name: 'Manu', age: 29 },
      { id:'z',name: 'Stephanie', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter:0,
    authenticated:false
  };

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

 
  
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons:[
        { name:'maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id;
    })

    //here we will fetch out because otherwise it would be just reference
    const person={
      ...this.state.persons[personIndex]
    }

    person.name=event.target.value;

    const persons=[...this.state.persons];
    persons[personIndex]=person;

    //this.setState({persons:persons});

    //ideally update like this
    this.setState((prevState, props)=>{
      return{
        persons:persons,
        changeCounter:prevState.changeCounter+1
      }
    });
  }

  deletePersonHandler=(personIndex)=>{
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  loginHandler=()=>{
    console.log('hi');
    this.setState({authenticated:true});  
  }

  togglePersonsHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  render() {
    console.log('[App.js] renderes'); 
    //let classes=['red','bold'].join(' ');
  
    return (
      <div className="App">
        <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>

        {/* ContextApi in react so that we can access specific forms of data across all levels */}
         <AuthContext.Provider value={{                                                               /* it takes jsx as child */
          authenticated:this.state.authenticated, 
          login: this.loginHandler
          }}>
        { this.state.showCockpit ? 
        <Cockpit
         title={this.props.title}
         personsLength={this.state.persons.length}
         showPersons={this.state.showPersons}
         changePerson={this.togglePersonsHandler}
         />: null }
        {this.state.showPersons?  
        <div>
        <Persons
         persons={this.state.persons}
         clicked={this.deletePersonHandler}
         changed={this.nameChangedHandler}
         isAuthenticated={this.state.authenticated}
         />   
        </div> :null
        }
        </AuthContext.Provider>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}



export default Radium(App);
