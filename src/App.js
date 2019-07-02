import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, CardSection, Card } from './components/common';
import Auth from './components/Auth';

class App extends Component {
    render(){
        return(
            <View>
               {/* <Header headerText={'AuthApp'}/> */}
               <Auth />
            </View>
        )
    }
}

export default App;