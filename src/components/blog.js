'use strict'

import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import { Post, NoPosts, Post404 } from 'components/posts'

const Blog = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      <li><Link to='/blog/first-post'>First post</Link></li>
      <li><Link to='/blog/second-post'>Second post</Link></li>
    </ul>
    
    <Switch>
      <Route path='/blog' exact component={NoPosts} />
      <Route path='/blog/:post(first-post|second-post)' component={Post} />
      <Route component={Post404} />
    </Switch>
  </div>
)

export default Blog
