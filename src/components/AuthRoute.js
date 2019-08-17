import React from 'react'
import { Route } from 'react-router-dom'

export default function AuthRoute( props ) {

  const isAuthenticated = true

  if ( isAuthenticated )
    return <Route { ...props } />
  else
    return <p>Nope.</p>

}
