'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import About from 'components/about'

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Link to='/about'>About</Link>
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
