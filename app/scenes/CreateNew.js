
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

import _ from 'lodash';

import SetGoal from '../components/SetGoal';
import StartCreate from '../components/StartCreate';
import SetTimeline from '../components/SetTimeline';
import SetIncentive from '../components/SetIncentive';
import FinalCheck from '../components/FinalCheck';

export default class CreateNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      postTitle: '',
      postStart: '',
      postEnd: '',
      postIncentive: '',
      spinnerVisible: false,
      postStatus: null
    }
  }

  _stepForward() {
    this.setState({step: this.state.step + 1});
  }

  _stepBackward() {
    this.setState({step: this.state.step - 1});
  }

  _setText(postTitle) {
    this.setState({postTitle: postTitle});
  }

  _setTimeline({start, end}) {
    this.setState({postStart: start, postEnd: end});
  }

  _setIncentive(amount) {
    this.setState({postIncentive: amount});
  }

  // _updateChoice(ref) {
  //   let newState = {...this.state.incentives};
  //
  //   _.forOwn(newState, (value, key) => {
  //     newState[value] = !key
  //   });
  //
  //   this.setState(newState);
  //   this.setState({postIncentive: })
  // }

  _submit() {
    // post to firebase here
  }

  render() {
    const { store } = this.props;
    return (
      <View style={styles.container}>
          { this.renderStep() }
      </View>
    );
  }

  renderStep() {
    switch (this.state.step) {
      case 0:
        return (<StartCreate {...this.props} stepForward={this._stepForward.bind(this)}/>)
        break;
      case 1:
        return (<SetGoal {...this.props} data={this.state}
                                         stepForward={this._stepForward.bind(this)}
                                         setText={this._setText.bind(this)} />);
        break;
      case 2:
        return (<SetTimeline {...this.props} data={this.state}
                                             stepForward={this._stepForward.bind(this)}
                                             stepBackward={this._stepBackward.bind(this)}
                                             setTimeline={this._setTimeline.bind(this)} />);
        break;
      case 3:
        return (<SetIncentive {...this.props} data={this.state}
                                              stepForward={this._stepForward.bind(this)}
                                              stepBackward={this._stepBackward.bind(this)}
                                              setIncentive={this._setIncentive.bind(this)} />);
        break;
      case 4:
        return (<FinalCheck {...this.props} data={this.state}
                                            stepBackward={this._stepBackward.bind(this)}
                                            submit={this._submit.bind(this)} />);
        break;
      default:
        return (<StartCreate {...this.props} />);
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  error: {
    color: 'red',
    fontSize: 22,
    fontStyle: 'italic',
    alignItems: 'center',
    justifyContent: 'center'
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
    alignItems: 'center',
    position: 'absolute',
    top: 88,
    backgroundColor: 'rgba(72, 72, 72, 0.6)',
    height: 200,
    width: 300,
    marginBottom: 40,
    borderRadius: 4
  },
  stretch: {
    height: 700,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 400
  },
  input: {
    borderRadius: 1,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    backgroundColor: 'white',
    height: 60,
    paddingLeft: 10,
    marginLeft: 20,
    marginRight: 20
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
