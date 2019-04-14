'use strict'

import React from 'react'

const Home = ({ match, location, history }) => (
  <div>
    {console.log('Home History: ', history)}
    {console.log('Home Location: ', location)}
    {console.log(
       'Home Location Search:',
       location.search
         .replace('?', '')
	 .split('&')
	 .reduce((acc, item) => {
	   const [key, value] = item.split('=')
           acc[key] = value
           return acc
	 }, {})
    )}
    {console.log('Home Match: ', match)}
    <h1>Home</h1>
  </div>
)

export default Home
