import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-ionicons'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// clean this up so it is a function, and only have to input name into function
const HomeTabBarIcon = ({ tintColor }) => (
  <Icon name="home" size={20} color={tintColor} />
);
const UserDetailsTabBarIcon = ({ tintColor }) => (
  <Icon name="contact" size={20} color={tintColor} />
);
const AddDonationTabBarIcon = ({ tintColor }) => (
  <Icon name="add-circle" size={20} color={tintColor} />
);
const SettingsTabBarIcon = ({ tintColor }) => (
  <Icon name="construct" size={20} color={tintColor} />
);

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Icon name="home" size={40} color="green"/>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Icon name="settings" size={40} color="green"/>
      </View>
    );
  }
}

class UserDetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>User Details!</Text>
        <Icon name="settings" size={40} color="green"/>
      </View>
    );
  }
}

class AddDonationScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Donation!</Text>
        <Icon name="settings" size={40} color="green"/>
      </View>
    );
  }
}


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen:HomeScreen,
    navigationOptions: {
      label: 'Home',
      tabBarIcon: HomeTabBarIcon
    }
  },
  UserDetails: {
    screen: UserDetailsScreen,
    navigationOptions: {
      label: 'Home',
      tabBarIcon: UserDetailsTabBarIcon
    }
  },
  AddDonation: {
    screen: AddDonationScreen,
    navigationOptions: {
      label: 'Home',
      tabBarIcon: AddDonationTabBarIcon
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      label: 'Home',
      tabBarIcon: SettingsTabBarIcon
    }
  },
});

export default createAppContainer(TabNavigator);
