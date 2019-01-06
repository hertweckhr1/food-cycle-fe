import React from 'react';
import { View, Text } from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button title="Sign Up" onPress={() => alert('button pressed')} />
      </View>
    );
  }
}
