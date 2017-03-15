
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class GoalScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  _handleChangeText(text) {
    this.setState({
      text: text
    })
  }

  _onPressNext() {
    this.props.navigator.push({
      title: 'TimelineScene'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Set a Goal</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. quit smoking, read 10 pages a day"
          onChangeText={(text) => this._handleChangeText}
         />

        <TouchableHighlight
          style={styles.bottomRightCorner}
          onPress={this._onPressNext.bind(this)}
          activeOpacity={2}
           >
          <Text>Next</Text>
        </TouchableHighlight>
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
  bottomRightCorner: {
    position: 'absolute',
    padding: 10,
    borderRadius: 3,
    bottom: 30,
    right: 30
  }
})
