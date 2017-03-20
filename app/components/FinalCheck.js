
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Title,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import createGoalsStyles from '../styles/createGoals';

export default class FinalCheck extends Component {

  constructor(props) {
    super(props);
  }

  _onPressBack() {
    this.props.stepBackward();
  }

  _onPressSubmit() {
    this.props.submit();
  }

  render() {
    const { store } = this.props;
    return (
      <View style={createGoalsStyles.container}>

        <Image style={createGoalsStyles.stretch} source={store.settings.goalHero}>
          {this.renderHeader()}
          <View style={createGoalsStyles.form, {backgroundColor: 'rgba(52, 79, 105, .6)'}}>
            <Text>Title: {this.props.data.postTitle} </Text>
            <Text>Start: {this.props.data.postStart.toString()} </Text>
            <Text>End: {this.props.data.postEnd.toString()} </Text>
            <Text>Incentive: {this.props.data.postIncentive} </Text>
          </View>


          <TouchableOpacity
            style={createGoalsStyles.bottomLeftCorner}
            onPress={this._onPressBack.bind(this)}
            activeOpacity={2}
             >
            <Text style={{color: 'white'}}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={createGoalsStyles.bottomRightCorner}
            onPress={this._onPressSubmit.bind(this)}
            activeOpacity={2}
             >
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>

          </Image>
      </View>
    )
  }

  renderHeader() {
    return (
      <View style={createGoalsStyles.headerBackground}>
        <Text style={createGoalsStyles.title}>Check That This is Correct</Text>
        <Text style={createGoalsStyles.subtitle}>Make Sure You Didn't Accidentally Add a Zero Somewhere.</Text>
      </View>
    );
  }
}
