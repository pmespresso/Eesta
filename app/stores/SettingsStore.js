export default class SettingsStore {
  constructor() {
    this.splashTime = 1000;
    this.splashImg = require('../../images/splash.jpg');
    this.loginBG = require('../../images/login.jpeg');
    this.startHero = require('../../images/start.jpeg');
    this.goalHero = require('../../images/books.jpeg');
    this.timeHero = require('../../images/time.jpeg');
    this.incentiveHero = require('../../images/incentive.jpeg');
  }

  get SplashTime() {
    return this.splashTime;
  }

  get SplashImg() {
    return this.splashImg;
  }

  get LoginBG() {
    return this.loginBG;
  }

  get StartHero() {
    return this.startHero;
  }

  get GoalHero() {
    return this.goalHero;
  }

  get TimeHero() {
    return this.timeHero;
  }

  get IncentiveHero() {
    return this.incentiveHero;
  }
}
