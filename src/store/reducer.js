import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import home from 'src/screens/Home/reducer'
import AppNavigator from 'src/navigation/AppNavigator'

const appInitialState = fromJS({})

const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
  case 'DEFAULT_ACTION':
    return state
  default:
    return state
  }
}

const navReducer = createNavigationReducer(AppNavigator)

export default combineReducers({
  home,
  nav: navReducer,
  app: appReducer,
})
