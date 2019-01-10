import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert
} from 'react-native';
import Icon from 'react-native-ionicons';
import axios from 'axios';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  onLogIn = () => {
    console.log('Button Pressed!');
    const { email: email, password } = this.state
    const url = `http://127.0.0.1:8000/api/user/token/`;
    axios
      .post(url, {email, password})
      .then(response => {
        console.log('API login success!');
        console.log(response);
        this.setState({
          email: '',
          password: '',
          error: '',
        });
        this.props.navigation.navigate('Home')
      })
      .catch(error => {
        console.log(error.response.data.errors);
        this.setState({error: 'Log attempt failed. Please try again.'});
      });
  }

  render() {
    return (
      <View>
        <View style={styles.inputContainer}>
          <Icon name="mail" size={30} color="black" style={styles.inputIcon} />
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email: email.toLowerCase()})}/>
        </View>

        <View style={styles.inputContainer}>
          <Icon name="key" size={30} color="black" style={styles.inputIcon} />
          <TextInput style={styles.inputs}
              placeholder="Password"
              label="Password"
              value={this.state.password}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={password => this.setState({password: password})}/>
        </View>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.onLogIn()}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: 'gray',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#1E1E1E',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "tomato",
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
});

export default LoginForm;
