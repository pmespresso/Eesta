'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Title,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import DatePicker from 'react-native-datepicker';

class Heading extends Component {
  render() {
    return (
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          {this.props.label}
        </Text>
      </View>
    );
  }
}

export default class TimelineScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      start: new Date(),
      end: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 6
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

  _onDateChange(date) {
    this.setState({
      end: date
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Set a Timeline</Text>

        <Heading style={styles.subTitle} label="Do This Till..." />
        <DatePicker
            style={styles.datePicker}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate={this.state.start}
            maxDate="2020-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {this.setState({date: date})}}
          />
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
  subTitle: {
    padding: 10,
    margin: 10,
    fontSize: 22
  },
  datePicker: {
    padding: 10,
    width: 500
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
