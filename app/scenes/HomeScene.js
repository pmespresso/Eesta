
import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import _ from 'lodash';
import * as firebase from 'firebase';

import GoalListItem from '../components/GoalListItem';

import { observer,inject } from 'mobx-react/native'

import { firebaseApp } from '.././firebase';

@inject("goalStore") @observer
export default class HomeScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isEmpty: false,
      isFinished: false,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  componentDidMount() {
    const { auth } = this.props.store;
    // get data
    firebaseApp.database().ref('/user_posts/' + auth.authUser.uid + '/posts').orderByChild('createdAt').on('value',
      (snapshot) => {
        if (snapshot.val()) {
          this.setState({ isEmpty: false });
          this.setState({ dataSource: this.state.dataSource.cloneWithRows(_.reverse(_.toArray(snapshot.val())))});
        } else {
          this.setState({ isEmpty: true });
        }
        this.setState({ isLoading: false });
      })
  }

  _onCreateNew() {
    this.props.navigator.push({
      title: 'CreateNew',
      passProps: this.props
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Current Active Goals</Text>

        <ListView
          automaticallyAdjustContentInsets={false}
          initialListSize={1}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          onEndReachedThreshold={1}
        />

          <TouchableHighlight
            onPress={this._onCreateNew.bind(this)}
            style={styles.add}
            >
            <Text>Add</Text>
          </TouchableHighlight>

      </View>
    );
  }

  _renderRow = (data) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{ data.title }</Text>
        <Text style={styles.title}>{ data.start }</Text>
        <Text style={styles.title}>{ data.end }</Text>
        <Text style={styles.title}>{ data.incentive }</Text>
      </View>
    )
  }

  _renderFooter = () => {
    if (this.state.isLoading) {
      return (
        <View style={styles.waitView}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }
    if (this.state.isEmpty) {
      return (
        <View style={styles.waitView}>
          <Text>Nothing there yet.</Text>
        </View>
      )
    }
  }

  _onEndReached = (data) => {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: 20,
    fontSize: 36
  },
  card: {
    flex: 1
  },
  waitView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100
  },
  add: {
    width: 300,
    height: 70,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  }
})
