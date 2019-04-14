'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'

import './css/style.css'
import About from 'components/about'
import Contact from 'components/contact'
import Home from 'components/home'
import Blog from 'components/blog'
import Error404 from 'components/error-404'
import GoBack from 'components/go-back'
import GoForward from 'components/go-forward'
import Go from 'components/go'

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
	  <ul>
	    <li><GoBack /></li>
	    <li><GoForward /></li>
	    <li><Go numberOfPages={-1} children={'Back a page'} /></li>
	    <li><Go numberOfPages={1} children={'Forward a page'} /></li>
	  </ul>
          <ul>
            <li><NavLink to={{ pathname: '/', state: { id: 'home' } }} exact>Home</NavLink></li>
            <li><NavLink to={{ pathname: '/about', state: { id: 'about' } }}>About</NavLink></li>
            <li><NavLink to={{ pathname: '/contact', state: { id: 'contact' } }}>Contact</NavLink></li>
            <li><NavLink to={{ pathname: '/blog', state: { id: 'blog' } }} exact>Blog</NavLink></li>
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
