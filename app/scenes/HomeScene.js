
import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GoalListItem from '../components/GoalListItem';

export default class HomeScene extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


    let dummyData = [
      {
        name: 'Quit Smoking',
        start: new Date(),
        end: new Date(),
        incentive: '$50'
      },
      {
        name: 'Exercise',
        start: new Date(),
        end: new Date(),
        incentive: '$100'
      },
      {
        name: 'Read a Book',
        start: new Date(),
        end: new Date(),
        incentive: '$10'
      }
    ];

    this.state = {
      dataSource: ds.cloneWithRows(dummyData)
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Current Active Goals</Text>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <GoalListItem rowData={rowData} />} />
      </View>
    );
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
  }
})
