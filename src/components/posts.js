'use strict'

import React from 'react'

const Post = ({ match }) => (
  <h2>Post: {match.params.post}</h2>
)

const NoPosts = () => (
  <p>Selecione um post</p>
)

export { Post, NoPosts }
