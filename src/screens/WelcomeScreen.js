import React from 'react';
import { View, Image, Button } from 'react-native';

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/food-cycle.png')} />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button title="Sign Up" onPress={() => alert('button pressed')} />
      </View>
    );
  }
}

export { WelcomeScreen };
