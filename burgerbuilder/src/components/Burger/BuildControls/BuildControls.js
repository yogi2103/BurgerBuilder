import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const Controls=[
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
]

const buildControls=(props)=>{
    return(
    <div className={classes.BuildControls}>
        <p>Current Price:{props.price.toFixed(2)}</p>
        {Controls.map(ctrl=>{
            return(<BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={()=>props.ingredientAdded(ctrl.type)}
                removed={()=>props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                /> )
        })}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.order}                                   //it will display the order summary of the order
        >Order Now!</button>
    </div>
 );
};

export default buildControls;