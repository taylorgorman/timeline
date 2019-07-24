import React from 'react'

import './style.scss'
import AdminCategories from '../AdminCategories'
import AdminSettings from '../AdminSettings'


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
