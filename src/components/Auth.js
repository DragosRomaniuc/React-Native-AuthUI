import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import Login from './Login'
import Register from './Register'

class Auth extends Component {
    constructor(props){
        super(props);
        this.state={
            page: 0
        }
    }

    changePage = () => {
        console.log('PRESSED')
        this.setState({page: this.state.page === 0 ? 1 : 0})
    }

    renderPages = () => {
        return this.state.page === 0 ? <Login changePage={this.changePage}/> : <Register changePage={this.changePage} /> 
    }

    render(){

        
    
        return(
            <ImageBackground
                source={require('./../resources/background2.jpg')}
                style={{width: '100%', height:"100%", flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}
            >
                
            {this.renderPages()}
              
            
            </ImageBackground>
        )
    }
}



export default Auth;