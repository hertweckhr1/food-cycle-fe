import React from 'react';
import { View, Image } from 'react-native';

class Home extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/food-cycle.png')} />
      </View>
    );
  }
}

export { Home };
