import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Header } from '../components/common';

class Home extends React.Component {
  static navigationOptions = {
    headerTitle: 'Food-Cycle',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/food-cycle.png')} />
      </View>
    );
  }
}

export { Home };
