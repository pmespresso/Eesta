'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Title,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import DatePicker from 'react-native-datepicker';

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
    const { store } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.stretch} source={store.settings.timeHero}>
          {this.renderHeader()}
          <DatePicker
              style={styles.datePicker}
              customStyles={{
                dateInput: {
                  borderRadius: 2,
                  borderWidth: 2,
                  borderColor: '#f2f2f2',
                  backgroundColor: 'white'
                }
              }}
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
            <Text style={{color: 'white'}}>Back</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.bottomRightCorner}
            onPress={this._onPressNext.bind(this)}
            activeOpacity={2}
             >
            <Text style={{color: 'white'}}>Next</Text>
          </TouchableHighlight>
        </Image>
      </View>
    )
  }

  renderHeader() {
    return (
      <View style={styles.headerBackground}>
        <Text style={styles.title}>Set a Timeline</Text>
        <Text style={styles.subtitle}>I'd Recommend 14 Days</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    paddingTop: 20,
    marginTop: 40,
    fontSize: 40,
    color: 'white'
  },
  subtitle: {
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 170,
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '100',
    color: 'white'
  },
  headerBackground: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(72, 72, 72, 0.6)',
    height: 200,
    width: 300,
    marginTop: 40,
    borderRadius: 4
  },
  stretch: {
    height: 700,
    width: 400,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  datePicker: {
    height: 60,
    width: 350,
    paddingLeft: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 330
  },
  bottomRightCorner: {
    position: 'absolute',
    padding: 10,
    borderRadius: 3,
    borderColor: 'white',
    borderWidth: 2,
    width: 100,
    bottom: 60,
    right: 40,
    alignItems: 'center'
  },
  bottomLeftCorner: {
    position: 'absolute',
    padding: 10,
    borderRadius: 3,
    borderColor: 'white',
    borderWidth: 2,
    width: 100,
    bottom: 60,
    left: 40,
    alignItems: 'center'
  }
})
