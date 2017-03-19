import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text
} from 'react-native';

import HomeScene from './scenes/HomeScene';
import GoalScene from './scenes/GoalScene';
import TimelineScene from './scenes/TimelineScene';
import IncentiveScene from './scenes/IncentiveScene';
import LoginScene from './scenes/LoginScene';

import AuthStore from './stores/AuthStore';
import SettingsStore from './stores/SettingsStore';

const settings = new SettingsStore(); // must comes first, as this is where firebase is initialized
const auth = new AuthStore();

export default class AppContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      store: {
        settings: settings,
        auth: auth
      }
    }
  }

  _configureScene(route, routeStack) {
    return Navigator.SceneConfigs.FloatFromRight;
  }

  _renderScene(route, navigator) {
    switch (route.title) {
      case 'LoginScene':
        return (<LoginScene {...route.passProps} navigator={navigator} />);
        break;
      case 'HomeScene':
        return (<HomeScene {...route.passProps} navigator={navigator} />);
        break;
      case 'GoalScene':
        return (<GoalScene {...route.passProps} navigator={navigator} />);
        break;
      case 'TimelineScene':
        return (<TimelineScene {...route.passProps} navigator={navigator} />);
        break;
      case 'IncentiveScene':
        return (<IncentiveScene {...route.passProps} navigator={navigator} />);
        break;
      default:
        null;
    }
  }

  render() {

    return (
      <Navigator
        style={{ flex: 1 }}
        ref={(ref) => this._navigator = ref}
        initialRoute={ {title: 'HomeScene',
                        index: 0,
                        passProps: {
                          store: this.state.store
                        }}
                      }
        renderScene={ this._renderScene.bind(this) }
        configureScene={ this._configureScene.bind(this) }
      />
    )
  }
}
