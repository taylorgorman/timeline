import React, { useEffect, useContext } from 'react'
import firebase from 'firebase/app'
import 'firebaseui/dist/firebaseui.css'

import Context from '../../Context'
import { firebaseUiAuth } from '../../utilities/firebase'


export default function Authenticate( props ) {

  const context = useContext( Context )

  useEffect(()=>{

    firebaseUiAuth.start( '#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          context.setUser( authResult.user )
        },
        uiShown: ()=> {
        }
      },
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      tosUrl: '/terms',
      privacyPolicyUrl: '/privacy',
    } )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (

    <div className="firebaseui-auth fixed-center">
      <h1 className="h3">Sign in to Timeline</h1>
      <div id="firebaseui-auth-container" />
    </div>

  )

}
