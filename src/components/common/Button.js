import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress,children, style}) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity 
            style={style}
            onPress={onPress}
        >
            
                 {children}
            
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        alignItems : 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(216,191,216, 0.5)',
        color: '#FFF',
        width: 100,
        borderRadius: 45,
        height: 45
    },
    textStyle:{
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    }
}

export { Button }