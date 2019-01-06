import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-ionicons'

class AddDonation extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Donation!</Text>
        <Icon name="settings" size={40} color="green"/>
      </View>
    );
  }
}

export { AddDonation };
