'use strict'

import React from 'react'

const About = ({ match, location, history }) => (
  <div>
    {console.log('About History: ', history)}
    {console.log('About Location: ', location)}
    {console.log('About Match: ', match)}
    <h1>About</h1>
  </div>
)

export default About
