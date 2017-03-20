
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Title,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';

import createGoalsStyles from '../styles/createGoals';

export default class IncentiveScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      amount: '$' + 0
    }
  }

  _onPressBack() {
    this.props.stepBackward();
  }

  _onPressNext() {
    this.props.setIncentive(this.state.amount);
    this.props.stepForward();
  }

  render() {
    const { store } = this.props;
    return (
      <View style={createGoalsStyles.container}>
        <Image style={createGoalsStyles.stretch} source={store.settings.incentiveHero}>

          {this.renderHeader()}

          <View style={createGoalsStyles.form}>

            <TextInput
              style={createGoalsStyles.input}
              value={this.state.amount}
              placeholder="$"
              onChangeText={(amount) => this.setState({amount: amount})}
             />

             {
               this.state.error
               ?
               <Text style={createGoalsStyles.error}>At Least $1!</Text>
               :
               null
             }

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
            onPress={this._onPressNext.bind(this)}
            activeOpacity={2}
             >
            <Text style={{color: 'white'}}>Next</Text>
          </TouchableOpacity>
        </Image>
      </View>
    )
  }

  renderHeader() {
    return (
      <View style={createGoalsStyles.headerBackground}>
        <Text style={createGoalsStyles.title}>Set an Incentive</Text>
        <Text style={createGoalsStyles.subtitle}>$20 Should Be Plenty</Text>
      </View>
    );
  }
}
