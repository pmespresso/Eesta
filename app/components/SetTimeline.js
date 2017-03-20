'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Title,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import DatePicker from 'react-native-datepicker';
import createGoalsStyles from '../styles/createGoals';

export default class TimelineScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
      start: new Date(),
      end: null,
      error: null
    }
  }

  _onPressBack() {
    this.props.stepBackward();
  }

  _onPressNext() {
    let timeline = {start: this.state.start, end: this.state.end}

    this.props.setTimeline(timeline);
    this.props.stepForward();
  }

  _onDateChange(date) {
    this.setState({
      end: date
    })
  }

  render() {
    const { store } = this.props;
    return (
      <View style={createGoalsStyles.container}>
        <Image style={createGoalsStyles.stretch} source={store.settings.timeHero}>
          {this.renderHeader()}
          <DatePicker
              style={createGoalsStyles.datePicker}
              customStyles={{
                dateInput: {
                  borderRadius: 2,
                  borderWidth: 2,
                  borderColor: '#f2f2f2',
                  backgroundColor: 'white'
                }
              }}
              date={this.state.end}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate={this.state.start}
              maxDate="2020-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              onDateChange={(date) => {this.setState({end: date})}}
            />

            {
              this.state.error
              ?
              <Text style={createGoalsStyles.error}>Set an End Date!</Text>
              :
              null
            }
          <TouchableOpacity
            style={createGoalsStyles.bottomLeftCorner}
            onPress={this._onPressBack.bind(this)}
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
        <Text style={createGoalsStyles.title}>Set an End Day</Text>
        <Text style={createGoalsStyles.subtitle}>Starting Today, I'd Recommend 14 Days</Text>
      </View>
    );
  }
}
