import *as React from 'react';
import { View } from 'react-native';

import AppHeader from './Component/AppHeader';
import DrawerNavigation from './Navigation/DrawerNavigation';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppHeader/>
           <DrawerNavigation/>
      </View>
    )
  }
}
