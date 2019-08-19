import React from 'react'

import './style.scss'
import Categories from './Categories'
import Settings from './Settings'
import User from './User'


export default function ( props ) {

  return (

    <div className="admin">

      <User />

      <h3 className="admin-title">Categories</h3>
      <Categories />

      <h3 className="admin-title">Settings</h3>
      <Settings />

    </div>

  )

}
