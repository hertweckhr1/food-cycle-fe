import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-ionicons'

class UserDetails extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>User Details!</Text>
        <Icon name="settings" size={40} color="green"/>
      </View>
    );
  }
}

export {UserDetails};
