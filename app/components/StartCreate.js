import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class SetGoal extends Component {

  constructor(props) {
    super(props);
  }

  _getStarted() {
    this.props.stepForward();
  }

  render() {
    const { store } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.stretch} source={store.settings.startHero}>
          {this.renderHeader()}

          <TouchableOpacity
            style={styles.center}
            underlayColor='white'
            onPress={this._getStarted.bind(this)}
             >
            <Text style={{color: 'white'}}>Get Started</Text>
          </TouchableOpacity>
        </Image>
      </View>
    );
  }

  renderHeader() {
    return (
      <View style={styles.headerBackground}>
        <Text style={styles.title}>Create a New Goal!</Text>
        <Text style={styles.subtitle}>Start With Something Easy...</Text>
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
  center: {
    padding: 10,
    borderRadius: 3,
    borderColor: 'white',
    borderWidth: 2,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200
  }
})
