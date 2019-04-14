'use strict'

import React from 'react'

const Home = ({ match, location }) => (
  <div>
    {console.log('Home Location: ', location)}
    {console.log('Home Match: ', match)}
    <h1>Home</h1>
  </div>
)

export default Home
