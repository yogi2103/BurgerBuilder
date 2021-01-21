import React,{useEffect,useRef,useContext} from 'react';
import Radium from 'radium';
import AuthContext from '../../context/auth-context';
const cockpit=(props)=>{

  const toggleButtonRef=useRef(null);
  const authContext=useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(()=>{
    console.log('[cockpit.js] useEffect');
    // const timer=setTimeout(()=>{
    //   alert('saved data to cloud');
    // },1000);   
    toggleButtonRef.current.click();
  return ()=>{
    //clearTimeout(timer);
    console.log('[Cockpit.js] cleanup work in useEffect');
  };
},[]);    //this will execute for the first rendering and rendering for when the person changes change [] to props.person

useEffect(()=>{
  console.log('[cockpit.js] 2nd useEffect');
  return ()=>{
    console.log('[Cockpit.js] cleanup work in 2nd useEffect');
  }
})

    const style={
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer',
        ':hover':{
          backgroundColor:'lightgreen',
          color: 'black'
        }
      }
      
      if(props.showPersons){
        style.backgroundColor='red';
        style[':hover']={
          backgroundColor:'salmon',
          color: 'black'
        }
      }
    let classes=[];
    if(props.personsLength<=2){
      classes.push('red');
    }

    if(props.personsLength<=1){
      classes.push('bold');
    }
    return(
        <div className="Cockpit">
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button ref={toggleButtonRef} style={style} onClick={props.changePerson}>Switch Name</button>
        <button onClick={authContext.login}>Log In</button>
        {/* <AuthContext.Consumer>
          {(context)=><button onClick={context.login}>Log In</button>}
        </AuthContext.Consumer> */}
        </div>
    );
}

export default React.memo(Radium(cockpit));     //React.memo for getting optimization of functional components
//where we use the shouldComponentUpdate in class-based components for same