'use strict'

import React from 'react'

const Error404 = ({ match }) => (
  <div>
    {console.log('Error404 Match: ', match)}
    <h1>Página não encontrada</h1>
  </div>
)

export default Error404
