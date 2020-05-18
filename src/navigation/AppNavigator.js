import { createStackNavigator } from 'react-navigation-stack'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import Home from 'src/screens/Home'

const routes = {
  Home: { screen: Home },
}

const AppNavigator = createStackNavigator(routes, {
  initialRouteName: 'Home',
})

const mapStateToProps = state => ({
  state: state.get('nav'),
})

const App = createReduxContainer(AppNavigator)

export default connect(mapStateToProps)(App)
