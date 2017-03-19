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
      error: ''
    }
  }

  _handleChangeEmail(email) {this.setState({email: email})}
  _handleChangePassword(password) {this.setState({password: password})}
  _toggleError(error) {
    this.setState({
      error: error
    })
  }

  _onPressLogin() {
    const { auth } = this.props.store;
    const { email, password } = this.state;

    const _this = this;
    auth.logIn({ email, password })
      .then((promise) => {
        this.props.navigator.push({
          title: "GoalScene",
          passProps: this.props
        })
      })
      .catch((error) => {
        _this._toggleError(error);
      })
  }

  _onPressSignup() {
    const { auth } = this.props.store;
    const { email, password } = this.state;

    const _this = this;
    auth.signUp({ email, password })
      .then((promise) => {
        this.props.navigator.push({
          title: "GoalScene",
          passProps: this.props
        })
      })
      .catch((error) => {
        _this._toggleError(error);
      })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderEmailField()}
        {this.renderPasswordField()}
        {this.renderError()}
        <View style={styles.buttonAlign}>
          {this.renderLoginButton()}
          {this.renderSignUpButton()}
        </View>
      </View>
    );
  }

  renderSignUpButton() {
    return (
        <TouchableHighlight
          style={styles.signup}
          onPress={this._onPressSignup.bind(this)}
          underlayColor='#3943B7'>
          <Text>
            Sign Up
          </Text>
        </TouchableHighlight>
    );
  }

  renderLoginButton() {
    return (
        <TouchableHighlight
          style={styles.login}
          onPress={this._onPressLogin.bind(this)}
          underlayColor='#3943B7'>
          <Text>
            Log in
          </Text>
        </TouchableHighlight>
    );
  }

  renderError() {
    return (
      <View>
        {
          this.state.error
          ?
          <Text style={styles.error}> Error, try again </Text>
          :
          null
        }
      </View>
    );
  }

  renderEmailField() {
    return (
      <TextInput
        style={styles.email}
        placeholder="Email"
        onChangeText={this._handleChangeEmail.bind(this)}
       />
    );
  }

  renderPasswordField() {
    return (
      <TextInput
        style={styles.password}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={this._handleChangePassword.bind(this)}
       />
    );
  }

  renderHeader() {
      return (
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>EESTA</Text>
          <Text style={styles.subtitle}>Incentive to be Disciplined.</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 40
  },
  subtitle: {
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 300,
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '100'
  },
  email: {
    borderRadius: 1,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 7,
    paddingLeft: 8
  },
  password: {
    borderRadius: 1,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 17,
    paddingLeft: 8
  },
  signup: {
    height: 40,
    width: 100,
    backgroundColor: '#4CAF50',
    paddingTop: 7.5,
    paddingTop: 7.5,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  login: {
    height: 40,
    width: 100,
    backgroundColor: '#3943B7',
    paddingTop: 7.5,
    paddingTop: 7.5,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    color: 'red',
    fontSize: 20
  },
  buttonAlign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
})
