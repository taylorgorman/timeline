import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { Loader } from 'react-feather'

import './styles.scss'
import Context from '../../Context'
import Authenticate from './Authenticate'

export default function AuthRoute( props ) {

  const context = useContext( Context )

  if ( context.authIsLoading() )
    return <Loader color="white" className="fixed-center infinite-rotate" />
  if ( context.user )
    return <Route { ...props } />
  else
    return <Authenticate />

}
