import { createStore, applyMiddleware, compose } from 'redux'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { fromJS } from 'immutable'
import rootReducers from './reducer'

const navMiddleware = createReactNavigationReduxMiddleware(state => state.nav)

const middlewareEnhancer = applyMiddleware(navMiddleware)

const store = createStore(rootReducers, fromJS({}), compose(middlewareEnhancer))

export default store
