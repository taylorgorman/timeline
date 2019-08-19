import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AuthRoute from './components/AuthRoute'
import App from './components/App'

export default function Routes() {

  return (

    <BrowserRouter>
      <AuthRoute exact path="/" component={ App } />
    </BrowserRouter>

  )

}
