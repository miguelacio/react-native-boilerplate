import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import * as actions from './actions'
import makeSelectHome from './selectors'

class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={this.handleOnPress}>
          <Text>Hola soy el frmework</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

Home.propTypes = {}

Home.navigationOptions = () => ({ headerShown: false })

const mapStateToProps = createStructuredSelector({
  splash: makeSelectHome(),
})

export default connect(mapStateToProps, { ...actions })(Home)
