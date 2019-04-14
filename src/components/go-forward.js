'use strict'

import React from 'react'
import { Route } from 'react-router-dom'

const GoForward = () => (
  <Route>
    {({ history }) => (
      <button onClick={(e) => history.goForward()}>Next Page {'->'}</button>
    )}
  </Route>
)

export default GoForward
