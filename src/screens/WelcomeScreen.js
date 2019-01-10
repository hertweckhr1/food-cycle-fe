import React from 'react';
import { View, Image, CheckBox } from 'react-native';
import LoginForm from '../components/LoginForm'

class WelcomeScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/food-cycle.png')} />
        <LoginForm navigation={this.props.navigation}/>
      </View>
    );
  }
}


export { WelcomeScreen };
