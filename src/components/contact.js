'use strict'

import React from 'react'

const Contact = ({ match, location, history }) => (
  <div>
    {console.log('Contact History: ', history)}
    {console.log('Contact Location: ', location)}
    {console.log('Contact Match: ', match)}
    <h1>Contact</h1>
  </div>
)

export default Contact
