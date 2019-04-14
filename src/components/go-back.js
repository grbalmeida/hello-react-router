'use strict'

import React from 'react'
import { Route } from 'react-router-dom'

const GoBack = () => (
  <Route>
    {({ history }) => (
      <button onClick={(e) => history.goBack()}>{'<-'}Go Back</button>
    )}
  </Route>
)

export default GoBack
