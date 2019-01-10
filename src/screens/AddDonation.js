// Doner needs to automatically be user logged in in axios post request
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import axios from 'axios';


class AddDonation extends Component {
  // doner should be user signed in
  state = {
    doner: '',
    productType: '',
    productDescription: '',
    measurement: '',
    quantity: '',
    pickupDetails: '',
    pickupStartTime: '',
    pickupEndTime: '',
    error: '',
  };

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

  onSubmitDonation = () => {
    // Doner needs to automatically be user logged in in axios post request
    console.log('Button Pressed!')
    const { doner, productType, productDescription, measurement,
      quantity, pickupDetails, pickupStartTime, pickupEndTime } = this.state
    const url = `http://127.0.0.1:8000/api/donation/donations`;
    axios
      .post(url, { user: doner, product_type: productType, product_description: productDescription,
        product_measurement: measurement, quantity: quantity, pickup_details: pickupDetails,
        pickup_starttime: pickupStartTime, pickup_endtime: pickupEndTime})
      .then(response => {
        console.log('API login success!');
        console.log(response);
        this.setState({
          productType: '',
          productDescription: '',
          measurement: '',
          quantity: '',
          pickupDetails: '',
          pickupStartTime: '',
          pickupEndTime: '',
        });
        this.setState({error: 'Donation successfully posted.'})
      })
      .catch(error => {
        console.log(error.response.data.errors);
        this.setState({error: 'Donation attempt failed. Please try again.'})
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
                underlineColorAndroid='transparent'
                onChangeText={productType => this.setState({ productType })}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Product Description"
                underlineColorAndroid='transparent'
                onChangeText={ productDescription => this.setState({ productDescription })}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Measurement"
                underlineColorAndroid='transparent'
                onChangeText={measurement => this.setState({ measurement })}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Quantity"
                underlineColorAndroid='transparent'
                onChangeText={quantity => this.setState({ quantity })}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Pick Up Details"
                underlineColorAndroid='transparent'
                onChangeText={pickupDetails => this.setState({ pickupDetails })}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Pick Up Start Time"
                underlineColorAndroid='transparent'
                onChangeText={pickupStartTime => this.setState({ pickupStartTime })}/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Pick Up End Time"
                underlineColorAndroid='transparent'
                onChangeText={pickupEndTime => this.setState({ pickupEndTime })}/>
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
    padding: 30,
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
    fontSize: 12,
    alignSelf: 'center',
    color: 'blue',
    padding: 10
  }
});

export { AddDonation };
