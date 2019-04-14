'use strict'

import React from 'react'

const Post = ({ match }) => (
  <h2>Post: {match.params.post}</h2>
)

const NoPosts = ({ numberOfPosts }) => (
  <p>Selecione um dos {numberOfPosts} posts</p>
)

const Post404 = () => (
  <h1>Esse post não existe</h1>
)

export { Post, NoPosts, Post404 }
