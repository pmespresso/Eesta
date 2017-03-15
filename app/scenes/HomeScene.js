
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Title,
  Text,
  View
} from 'react-native';

export default class HomeScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.title}>Set a Goal</Title>
        <Input style={style.input} />

        <Text style={styles.bottomRightCorner}>
          >
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 5
  },
  bottomRightCorner: {
    position: 'absolute',
    bottom: 0,
    right: 0
  }
})
