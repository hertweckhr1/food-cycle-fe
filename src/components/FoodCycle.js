import React, { Component } from 'react';
import axios from 'axios';
import Navigation from './Navigation'

class FoodCycle extends Component {
  state = {
    user: [],
    donations: [],
  }

  onLogIn (email, password) {
    console.log('Button Pressed!');
    // const { , password } = this.state
    const url = `http://127.0.0.1:8000/api/user/token/`;
    const userURL = `http://127.0.0.1:8000/api/user/me/`
    axios
      .post(url, {email, password})
      .then(response => {
        console.log('API login success!');
        console.log("Token " + response.data['token'])
        axios
          .get(userURL, { headers: { Authorization: "Token " + response.data['token']}})
          .then(response => {
            console.log('I got the user info!')
            console.log(response)
            this.props.navigation.navigate('Home')
          })
          .catch(error => {
            console.log('error!');
            // this.setState({error: 'Token not working'})
          });
        // console.log(response.data);
        // this.setState({
        //   email: '',
        //   password: '',
        //   error: '',
        //   token: response.data['token']
        // });
      })
      .catch(error => {
        console.log(error.response.data.errors);
        // this.setState({error: 'Log attempt failed. Please try again.'});
      });
  }


  render() {
    return <Navigation greeting="hello" loginUserCallback={this.onLogIn.bind(this)} screenProps={{ loginUserCallback: this.onLogIn.bind(this) }}/>;
  }
}

export default FoodCycle;
