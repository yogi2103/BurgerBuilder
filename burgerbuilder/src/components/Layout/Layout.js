import React,{Component} from 'react';

import Aux from '../../hoc/Auxilliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSider: true
    }
    
    sideDrawerClosedHandler=()=>{
        this.setState({showSider:false});
    }

    sideDrawerToggleHandler=()=>{

        this.setState((prevState)=>{
            return {showSider: !prevState.showSider};
        })

        //this.setState({showSider: !this.state.showSider});        not using this because of asynchronous behavior
    }

    render(){
        return(
            <Aux>
            <Toolbar
             drawerToggleClicked={this.sideDrawerToggleHandler}
             />
            <SideDrawer open={this.state.showSider} closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}

export default Layout;