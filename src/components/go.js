'use strict'

import React from 'react'
import { Route } from 'react-router-dom'

const Go = ({ numberOfPages, children }) => (
  <Route>
    {({ history }) => (
      <button onClick={(e) => history.go(numberOfPages)}>{children}</button>
    )}
  </Route>
)

export default Go
