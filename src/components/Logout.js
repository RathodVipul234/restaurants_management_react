import React, { Component } from 'react'
import {RouterProps} from 'react-router-dom'
import { withRouter } from './withRouter'

class Logout extends Component {
  render() {
    localStorage.clear()
    // this.props.history.push('/login')
    return (
      <h1>logout successfully</h1>
    )
  }
}

export default withRouter(Logout)
