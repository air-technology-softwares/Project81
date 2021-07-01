import { styleSheets } from 'min-document';
import *as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import BottomTabNavigator from '../Navigation/BottomTabNavigation';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>HomeScreen</Text>
                <BottomTabNavigator/>
            </View>
        )
    }
}

