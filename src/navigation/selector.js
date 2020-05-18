import { createSelector } from 'reselect'
import { initialState } from 'src/store/reducer.js'

const selectAppDomain = state => state.get('app', initialState)
const selectNavDomain = state => state.get('nav', initialState)

const makeSelectApp = () =>
  createSelector(selectAppDomain, substate => substate.toJS())

const makeSelectNav = () => createSelector(selectNavDomain, nav => nav)

export default makeSelectApp
export { selectAppDomain, makeSelectNav }
