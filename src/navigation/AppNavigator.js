import { createStackNavigator } from 'react-navigation-stack'
import { createReduxContainer } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Home from 'src/screens/Home'

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
  },
)

const mapStateToProps = state => ({
  state: state.get('nav'),
})

const App = createReduxContainer(AppNavigator)

export default connect(mapStateToProps)(App)
