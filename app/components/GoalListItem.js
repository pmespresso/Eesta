
import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

export default class GoalListItem extends Component {
  constructor(props) {
    super(props);

  }

  _onPressItem(e) {
    e.preventDefault();


  }

  render() {
    const { rowData } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.goalItem}
          onPress={this._onPressItem.bind(this)}>
          <View style={styles.goal}>
            <View style={styles.header}>
                <Text style={styles.itemName}>{rowData.name}</Text>
            </View>

            <View>
              <Text>Started:
              {rowData.start.toDateString()}</Text>
            </View>

            <View>
              <Text>Ending:
              {rowData.end.toDateString()}</Text>
            </View>

            <Text style={styles.incentive}>{rowData.incentive}</Text>
          </View>

          </TouchableHighlight>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  goalItem: {
    height: 200,
    width: 370,
    borderRadius: 1,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    alignItems: 'center'
  },
  goal: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  incentive: {
    fontWeight: 'bold',
    fontSize: 30
  },
  header: {
    alignItems: 'center',
    padding: 15,
    marginBottom: 30
  },
  itemName: {
    fontWeight: '500',
    fontSize: 28,
    padding: 10
  }
})
