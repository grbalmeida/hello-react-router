'use strict'

import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import { Post, NoPosts, Post404 } from 'components/posts'

const Blog = ({ match, location, history }) => (
  <div>
    {console.log('Blog History: ', history)}
    {console.log('Blog Location: ', location)}
    {console.log('Blog Match: ', match)}
    <h1>Blog</h1>
    <ul>
      <li><NavLink to='/blog/first-post'>First post</NavLink></li>
      <li><NavLink to='/blog/second-post'>Second post</NavLink></li>
    </ul>

    <Switch>
      <Route path='/blog' exact render={() => <NoPosts numberOfPosts={2} />} />
      <Route path='/blog/:post(first-post|second-post)' component={Post} />
      <Route component={Post404} />
    </Switch>
  </div>
)

export default Blog
