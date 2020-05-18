import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectHomeDomain = state => state.get('home', initialState)

const makeSelectHome = () =>
  createSelector(selectHomeDomain, substate => substate.toJS())

export default makeSelectHome
export { selectHomeDomain }
