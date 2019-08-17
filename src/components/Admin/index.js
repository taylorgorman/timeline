import React from 'react'

import './style.scss'
import AdminCategories from './Categories'
import AdminSettings from './Settings'


export default function ( props ) {

  return (

    <div className="admin">

      <h3 className="admin-title">Categories</h3>
      <AdminCategories />

      <h3 className="admin-title">Settings</h3>
      <AdminSettings />

    </div>

  )

}
