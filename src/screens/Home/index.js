import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Text, SafeAreaView } from 'react-native'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import * as actions from './actions'
import makeSelectHome from './selectors'

class Splash extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Hola soy el frmework</Text>
      </SafeAreaView>
    )
  }
}

Splash.propTypes = {}

Splash.navigationOptions = () => ({ headerShown: false })

const mapStateToProps = createStructuredSelector({
  splash: makeSelectHome(),
})

export default connect(mapStateToProps, { ...actions })(Splash)
