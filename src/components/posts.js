'use strict'

import React from 'react'

const Post = ({ match, location }) => (
  <div>
    {console.log('Post Location: ', location)}
    {console.log('Post Match: ', match)}
    <h2>Post: {match.params.post}</h2>
  </div>
)

const NoPosts = ({ numberOfPosts }) => (
  <p>Selecione um dos {numberOfPosts} posts</p>
)

const Post404 = ({ match, location }) => (
  <div>
    {console.log('Post404 Location: ', location)}
    {console.log('Post404 Match: ', match)}
    <h1>Esse post não existe</h1>
  </div>
)

export { Post, NoPosts, Post404 }
