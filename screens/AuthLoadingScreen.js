import React from 'react';
import {View,ActivityIndicator, AsyncStorage,StatusBar } from 'react-native';
import Login from '.././screens/Login';
import Dashboard from '.././screens/Dashboard';

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
      super(props);
      this._bootstrapAsync();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      //const userToken = await AsyncStorage.getItem('userToken');
  
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      //this.props.navigation.navigate(userToken ? 'Dashboard' : 'Login');
      this.props.navigation.navigate('Login');
    };
  
    // Render any loading content that you like here
    render() {
      return (
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }