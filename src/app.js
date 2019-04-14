'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'

import './css/style.css'
import About from 'components/about'
import Contact from 'components/contact'
import Home from 'components/home'
import Blog from 'components/blog'
import Error404 from 'components/error-404'

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><NavLink to='/' exact>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/blog' exact>Blog</NavLink></li>
	    <li><a href='#site-info'>Site Info</a></li>
          </ul>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/blog' component={Blog} />
            <Route component={Error404} />
          </Switch>
	  <div id='site-info' style={{ margin: '1000px 0' }}>
	    <h1>Site Info</h1>
	  </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
