import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

// just putting secureTextEntry without equaling boolean
// it will automatically be true

class LoginForm extends Component {
  render() {
    return (
      <View>
        <Text>Login Here</Text>
        <TextInput />
        <TextInput />
      </View>
    );
  }
}


export default LoginForm;
