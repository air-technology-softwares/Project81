import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from "react-navigation-tabs";

import HomeScreen from '../Screen/HomeScreen';
import PostScreen from '../Screen/PostScreen';
import FeedScreen from '../Screen/FeedScreen';

export default class BottomTabNavigation extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <AppContainer/>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator (
  {
    Home: {screen: HomeScreen},
    Post: {screen: PostScreen},
    Feed: {screen: FeedScreen},
  }
)

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
});