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

import createGoalsStyles from '../styles/createGoals';

export default class SetGoal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: this.props.data.postTitle || '',
      error: null
    }
  }

  _onPressNext() {
    const postTitle = this.state.text;
    console.log(postTitle);
    if (this.state.text.length > 2) {
      this.setState({error: false})
      this.props.setText(postTitle);
      this.props.stepForward();
    } else {
      this.setState({error: true})
    }
  }

  render() {
    const { store } = this.props;
    return (
      <View style={createGoalsStyles.container}>
        <Image style={createGoalsStyles.stretch} source={store.settings.goalHero}>
          {this.renderHeader()}

          <View style={createGoalsStyles.form}>
            <TextInput
              style={createGoalsStyles.input}
              value={this.state.text}
              placeholder="e.g. quit smoking, read 10 pages a day"
              onChangeText={(text) => this.setState({text: text})}
             />

             {
               this.state.error
               ?
               <Text style={createGoalsStyles.error}>Your Goal Must Have A Name~!</Text>
               :
               null
             }
          </View>


          <TouchableOpacity
            style={createGoalsStyles.bottomRightCorner}
            underlayColor='white'
            onPress={this._onPressNext.bind(this)}
             >
            <Text style={{color: 'white'}}>Next</Text>
          </TouchableOpacity>
        </Image>
      </View>
    );
  }

  renderHeader() {
    return (
      <View style={createGoalsStyles.headerBackground}>
        <Text style={createGoalsStyles.title}>Set a Goal</Text>
        <Text style={createGoalsStyles.subtitle}>Make it measurable and achievable.</Text>
      </View>
    );
  }
}
