import React from 'react';
import { View, Image } from 'react-native';
import { Button } from '../components/common'
import LoginForm from '../components/LoginForm'

class WelcomeScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/food-cycle.png')} />
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
        >Login</Button>
        <Button onPress={() => alert('button pressed')}>Sign Up</Button>
      </View>
    );
  }
}


export { WelcomeScreen };
