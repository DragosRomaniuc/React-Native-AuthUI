import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from './common'
const win = Dimensions.get('window');

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPass: false
        }
    }

    showPass = () =>{
        console.log("pressed");
        this.setState({showPass: !this.state.showPass})
    }

    render(){

        const {
            inputContainer, 
            input, 
            logoContainer, 
            logo, 
            logoText,
            buttonContainer, 
            buttonStyle, 
            buttonText,
            inputIcon,
            btnEye} = styles;
        return(
            <View style={{alignItems:'center'}}>
                <View style={logoContainer}>
                    {/* <Image source={require('./../resources/applelogo.png')} style={logo} /> */}
                    <Text style={logoText}>Register</Text>
                    
                </View>

                <View style={inputContainer}> 
                        <Icon name="ios-person" size={26} color={'rgba(255, 255, 255, 0.5'}  style={inputIcon}/>
                        <TextInput
                            style={input}
                            placeholder={'Username'}
                            placeholderTextColor={'rgba(255,255,255,0.7)'}
                            underlineColorAndroid='transparent'
                        />
                </View>

                <View style={inputContainer}>
                     <Icon name="ios-lock" size={30} color="#900" style={inputIcon}/>
                     <TextInput
                            secureTextEntry={this.state.showPass}
                            style={input}
                            placeholder={'Password'}
                            placeholderTextColor={'rgba(255,255,255,0.7)'}
                            underlineColorAndroid='transparent'
                        />
                    
                    <Button onPress={this.showPass} style={btnEye}>
                     <Icon name={this.state.showPass ? 'ios-eye' : 'ios-eye-off'} size={26} color="#ebeded"/>
                    
                    </Button>

                   
                </View>

                <View style={buttonContainer}>
                    <Button
                        style={buttonStyle}
                        onPress={()=>console.log('pressed')}
                     >
                        <Text style={buttonText}>
                            Register
                        </Text>
                        
                    </Button>
                </View>

                <View >
                    <Button
                        style={{marginTop: 15}}
                        onPress={this.props.changePage}
                     >
                        <Text style={buttonText}>
                        Already have an account? Log In!
                        </Text>
                        
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = {
    backgroundContainer: {
        display: 'flex',
        flexDirection: 'column'
        // position: 'relative'
        // flexDirection : 'row'
    },
    input: {
        width: win.width - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(221,160,221, 0.1)',
        marginHorizontal: 25,
        position: 'relative',
        // marginTop: 10,
        color: 'white'
    },
    logoContainer: {
        // alignItems: 'center',
        // justifyContent: 'center'
        // marginTop: '35%'
        // flex: 3
    },
    logo: {
        width: 120,
        height: 120,
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5,
        textAlign: 'center'
    },
    buttonContainer:{
        alignItems: 'center',
        marginTop: 10
    },
    buttonStyle:{
        alignItems : 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(216,191,216, 0.5)',
        color: '#FFF',
        width: 100,
        borderRadius: 45,
        height: 45
    },
    buttonText : {
        fontSize: 16,
        color: 'white'
    },
    inputContainer : {
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37,
        color: '#ebeded',
        opacity: 0.5
    },
    btnEye:{
        position: 'absolute',
        // top: 6,
        right: 37,
        // 
        // alignItems: 'center'
        opacity: 0.5,
        color: "#ebeded"
    }
}

export default Register;