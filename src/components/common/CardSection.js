import React from 'react';
import { View, Text} from 'react-native';

const CardSection = props => {
    const { cardSectionStyle } = styles;

    return(
        <View style={cardSectionStyle} > 
            {props.children}
        </View>
    )
}

const styles = {
    cardSectionStyle:{
        borderBottomWidth: 1,
        padding: 5,
        backroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export { CardSection };