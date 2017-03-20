import {
  StyleSheet
} from 'react-native';

const createGoalsStyles = StyleSheet.create({
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
    width: 375
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
  datePicker: {
    height: 60,
    width: 350,
    paddingLeft: 10,
    marginLeft: 20,
    marginRight: 20
  },
  incentive: {
    width: 100,
    height: 60,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  finalCheck: {
    position: 'absolute',
    top: 300
  },
  bottomLeftCorner: {
    position: 'absolute',
    padding: 10,
    borderRadius: 3,
    borderColor: 'white',
    borderWidth: 2,
    width: 100,
    bottom: 60,
    left: 40,
    alignItems: 'center'
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

export default createGoalsStyles;
