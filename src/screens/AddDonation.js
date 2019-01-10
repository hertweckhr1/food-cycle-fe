// Doner needs to automatically be user logged in in axios post request
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import axios from 'axios';


class AddDonation extends React.Component {
  state = {
    email: '',
    password: '',
    is_doner: '',
    point_of_contact: '',
    company_name: '',
    street_address: '',
    street_address2: '',
    city: '',
    state: '',
    zip: '',
    error: '',
  };

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  onLogIn = () => {
    // Doner needs to automatically be user logged in in axios post request
    console.log('Button Pressed!')
    const { email, password } = this.state
    const url = `http://127.0.0.1:8000/api/user/create/`;
    axios
      .post(url, email, password)
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
        this.error('Log attempt failed. Please try again.')
      });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Add Donation</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Product Type"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email: email})}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Product Description"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email: email})}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Measurement"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email: email})}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Quantity"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email: email})}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Pick Up Details"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email: email})}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Pick Up Start Time"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email: email})}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Pick Up End Time"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email: email})}/>
          </View>

          <Text style={styles.errorTextStyle}>{this.state.error}</Text>

          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.onLogIn}
          >
            <Text style={styles.loginText}>Add Donation</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 50,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    paddingBottom: 30,
    fontFamily: 'Futura',
  },
  inputContainer: {
      borderBottomColor: 'gray',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:300,
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

export { AddDonation };
