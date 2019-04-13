'use strict'

import React from 'react'

const Post = ({ match }) => (
  <h2>Post: {match.params.post}</h2>
)

const NoPosts = () => (
  <p>Selecione um post</p>
)

const Post404 = () => (
  <h1>Esse post não existe</h1>
)

export { Post, NoPosts, Post404 }
