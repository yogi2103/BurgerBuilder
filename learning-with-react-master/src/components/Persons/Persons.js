import React,{Component} from 'react';
import Person from './Person/Person';
class Persons extends Component{
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedstatefromprops');
    //     return state;
    // }


    //you should know the thing we use shouldComponentUpdate to stop unnecessary updates/re-rendering 
    //because when the render happens then react compares the virtual dom with (future)re-rendered virtual dom
    //and if it finds any difference then only it changes it to the only place where the difference is found not whole
    //it updates the real dom only at the places there are changes

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');

    //     //one thing to note here is it just shallow compare here and it wouldn't work properly we haven't made
    //     //namechangeHandler function in app.js properly by creating new variable rather than just manipulating original
    //     if( 
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||  //we are checking for this from the props we are seding to person
    //         nextProps.clicked !== this.props.clicked
    //         ){
    //         return true;
    //       }
    //       else{
    //         return false;
    //       }
    // }


    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeupdate');
        return {message:'Snapshot!'};

    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }
    render(){
        console.log('[Persons.js] rendering...');
        console.log('State in persons',this.props.isAuthenticated);
        return(
            this.props.persons.map((person,index)=>{
                return <Person
                click={()=>this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event)=>this.props.changed(event,person.id)}
            />
            })
        );
    }
}

export default Persons;