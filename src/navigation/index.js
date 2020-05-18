import React, { Component } from 'react'
import AppNavigator from './AppNavigator'
import { View } from 'react-native'
import makeSelectApp, { makeSelectNav } from './selector'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'src/store/actions'
// import PropTypes from 'prop-types'

class AppWithNavigationState extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    )
  }
}

AppWithNavigationState.propTypes = {}

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
  state: makeSelectNav(),
})

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators(actions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppWithNavigationState)
