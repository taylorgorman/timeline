import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'

import Context from '../../Context'


export default function ( props ) {

  const { user, signOut } = useContext( Context )

  return (

    <div className="user">

      { user.photoURL ? (
        <img src={ user.photoURL } alt={ user.displayName + ' profile photo' } />
      ) : (
        <span className="nophoto" />
      ) }

      <span className="display-name">
        { user.displayName }<br />
        <Button
          variant="link"
          size="sm"
          onClick={ signOut }
        >
          Sign out
        </Button>
      </span>

    </div>

  )

}
