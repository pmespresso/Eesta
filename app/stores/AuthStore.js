
import { observable, action } from 'mobx';
import * as firebase from 'firebase';

export default class AuthStore {
  @observable authUser = null;

  constructor() {
    firebase.auth().onAuthStateChanged((user) => {
      this.authUser = user;
    })
  }

  @action
  async signUp({email, password}) {
    try {
      await firebase.auth()
                    .createUserWithEmailAndPassword(email, password);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }

  @action
  async logIn({email, password}) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      return Promise.reject(error.message);
    }
  }

  @action
  async signOut() {
    try {
      firebase.auth().signOut();
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
}
