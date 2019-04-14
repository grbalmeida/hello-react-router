'use strict'

import React from 'react'
import { Prompt } from 'react-router-dom'

const Register = () => (
  <div>
    <h1>Register</h1>
    <Prompt when={true} message='Browsing blocked' />
  </div>
)

export default Register
