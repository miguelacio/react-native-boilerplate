import React, { Component } from 'react'
import AppNavigator from './AppNavigator'
import { View, BackHandler } from 'react-native'
import makeSelectApp, { makeSelectNav } from './selector'
import { createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'src/store/actions'
import PropTypes from 'prop-types'
import { NavigationActions } from 'react-navigation'

class AppWithNavigationState extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch } = this.props

    dispatch(NavigationActions.back())
    return true
  }

  render() {
    const {
      app: { user },
    } = this.props

    console.log('---AppNavigator---')
    console.log(AppNavigator)
    console.log('---AppNavigator---')

    return (
      <View style={{ flex: 1 }}>
        <AppNavigator
          screenProps={{
            user,
          }}
        />
      </View>
    )
  }
}

AppWithNavigationState.propTypes = {
  app: PropTypes.object,
  // state: PropTypes.object,
  dispatch: PropTypes.func,
}

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
