
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Title,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class TimelineScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      start: Date.now(),
      end: ''
    }
  }

  _onPressBack() {
    this.props.navigator.pop();
  }

  _onPressNext() {
    this.props.navigator.push({
      title: 'IncentiveScene'
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Set a Timeline</Text>

        <TouchableHighlight
          style={styles.bottomLeftCorner}
          onPress={this._onPressBack.bind(this)}
          activeOpacity={2}
           >
          <Text>Back</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.bottomRightCorner}
          onPress={this._onPressNext.bind(this)}
          activeOpacity={2}
           >
          <Text>Next</Text>
        </TouchableHighlight>
      </View>
    )
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
  bottomLeftCorner: {
    position: 'absolute',
    padding: 10,
    borderRadius: 3,
    bottom: 30,
    left: 30
  },
  bottomRightCorner: {
    position: 'absolute',
    padding: 10,
    borderRadius: 3,
    bottom: 30,
    right: 30
  }
})
