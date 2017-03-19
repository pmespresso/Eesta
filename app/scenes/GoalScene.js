
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  Image,
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
      title: 'TimelineScene',
      passProps: this.props
    })
  }

  render() {
    const { store } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.stretch} source={store.settings.goalHero}>
          {this.renderHeader()}
          <TextInput
            style={styles.input}
            placeholder="e.g. quit smoking, read 10 pages a day"
            onChangeText={(text) => this._handleChangeText}
           />

          <TouchableHighlight
            style={styles.bottomRightCorner}
            onPress={this._onPressNext.bind(this)}
            underlayColor='white'
             >
            <Text style={{color: 'white'}}>Next</Text>
          </TouchableHighlight>
        </Image>
      </View>
    );
  }

  renderHeader() {
    return (
      <View style={styles.headerBackground}>
        <Text style={styles.title}>Set a Goal</Text>
        <Text style={styles.subtitle}>Make it measurable and achievable.</Text>
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
  input: {
    borderRadius: 1,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    backgroundColor: 'white',
    height: 60,
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
  }
})
