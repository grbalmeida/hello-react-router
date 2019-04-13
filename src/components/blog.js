'use strict'

import React from 'react'
import { Link, Route } from 'react-router-dom'

import { Post, NoPosts } from 'components/posts'

const Blog = () => (
  <div>
    <h1>Blog</h1>
    <ul>
      <li><Link to='/blog/first-post'>First post</Link></li>
      <li><Link to='/blog/second-post'>Second post</Link></li>
    </ul>

    <Route path='/blog/:post' component={Post} />
    <Route path='/blog' exact component={NoPosts} />
  </div>
)

export default Blog
