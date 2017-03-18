import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { observer } from 'mobx-react/native';

@observer
export default class SignUpScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: false
    }
  }

  _handleChangeEmail(email) {this.setState({email: email})}
  _handleChangePassword(password) {this.setState({password: password})}

  _toggleError(error) {
    !this.state.error
    ?
    this.setState({error:true})
    :
    null
  }

  _onPressSubmit() {
    const { auth } = this.props.store;
    const { email, password } = this.state;

    const _this = this;
    auth.signUp({ email, password })
    .then((promise) => {
      this.props.navigator.push({
        title: "GoalScene",
        passProps: this.props
      })
    }).catch((error) => {
      _this._toggleError(error);
    })
  }

  _toSignInPage() {
    this.props.navigator.replace({
      title: "LoginScene",
      passProps: this.props
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={this._handleChangeEmail.bind(this)}
         />
       <TextInput
         style={styles.input}
         secureTextEntry={true}
         placeholder="Password"
         onChangeText={this._handleChangePassword.bind(this)}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={this._onPressSubmit.bind(this)}
          activeOpacity={2}
           >
          <Text>Sign Up</Text>
        </TouchableHighlight>

        <View>
          {
            this.state.error
            ?
            <Text style={styles.error}> Error, try again </Text>
            :
            null
          }
        </View>

        <View>
          <Text>Already a member? </Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this._toSignInPage.bind(this)}
            activeOpacity={2}>
            <Text>
              Sign in.
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    paddingTop: 20,
    fontSize: 40
  },
  input: {
    borderRadius: 1,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    height: 60,
    padding: 10,
    margin: 5
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: '#f2f2f2'
  },
  signin: {
    height: 30
  },
  error: {
    color: 'red',
    fontSize: 20
  }
})
