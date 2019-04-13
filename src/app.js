'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import About from 'components/about'
import Contact from 'components/contact'
import Home from 'components/home'
import Blog from 'components/blog'

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
	    <li><Link to='/blog'>Blog</Link></li>
          </ul>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
	  <Route path='/blog' component={Blog} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
