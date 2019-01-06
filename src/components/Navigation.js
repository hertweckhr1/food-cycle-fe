import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import Icon from 'react-native-ionicons'
import { createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation';
import { Home, WelcomeScreen, Settings, UserDetails, AddDonation } from '../screens'

// clean this up so it is a function, and only have to input name into function
class Navigation extends Component {
  render() {
    return <AppContainer />;
  }
}

export default Navigation;


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

// tab
const TabNavigator = createBottomTabNavigator({
  Home: {
    screen:Home,
    navigationOptions: {
      label: 'Home',
      tabBarIcon: HomeTabBarIcon
    }
  },
  UserDetails: {
    screen: UserDetails,
    navigationOptions: {
      label: 'Home',
      tabBarIcon: UserDetailsTabBarIcon
    }
  },
  AddDonation: {
    screen: AddDonation,
    navigationOptions: {
      label: 'Home',
      tabBarIcon: AddDonationTabBarIcon
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      label: 'Home',
      tabBarIcon: SettingsTabBarIcon
    }
  },
});

const StackNavigator = createStackNavigator(
  {
    TabNavigator: TabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerRight: (
          <Icon
            style={{ paddingRight: 10 }}
            onPress={() => navigation.openDrawer()}
            name="log-out"
            size={30}
          />
        ),
        headerTitle: 'Food-Cycle'
      };
    }
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: StackNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator)



// const AppContainer = createAppContainer(TabNavigator);
