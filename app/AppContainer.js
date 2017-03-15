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

export default class AppContainer extends Component {

  constructor(props) {
    super(props);
  }

  _configureScene(route, routeStack) {
    return Navigator.SceneConfigs.FloatFromRight;
  }

  _renderScene(route, navigator) {
    switch (route.title) {
      case 'GoalScene':
        return (<GoalScene navigator={navigator} />);
        break;
      case 'TimelineScene':
        return (<TimelineScene navigator={navigator} />);
        break;
      case 'IncentiveScene':
        return (<IncentiveScene navigator={navigator} />);
        break;
      default:
        null;
    }
  }

  render() {
    const routes = [
      { title: 'GoalScene', index: 0 },
      { title: 'TimelineScene', index: 1 },
      { title: 'IncentiveScene', index: 2 }
    ];

    return (
      <Navigator
        style={{ flex: 1 }}
        ref={(ref) => this._navigator = ref}
        initialRoute={ routes[0] }
        initialRouteStack={ routes }
        renderScene={ this._renderScene.bind(this) }
        configureScene={ this._configureScene.bind(this) }
      />
    )
  }
}
