'use strict'

import React from 'react'

const Contact = ({ match, location }) => (
  <div>
    {console.log('Contact Location: ', location)}
    {console.log('Contact Match: ', match)}
    <h1>Contact</h1>
  </div>
)

export default Contact
