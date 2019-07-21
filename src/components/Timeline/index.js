import './style.scss'
import React from 'react'

import Items from '../Items'
import Dateline from '../Dateline'


export default function ( props ) {

  return ( <>

    <div className="timeline">
      <Items />
      <Dateline />
    </div>

  </> )

}
