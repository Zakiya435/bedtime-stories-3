import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteScreen},
  Read: {screen: ReadScreen},
});

const SwitchNavigator = createBottomTabNavigator({
  LoginScreen: {screen: LoginScreen},
  TabNavigator: {screen: TabNavigator},
});

const AppContainer =  createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});