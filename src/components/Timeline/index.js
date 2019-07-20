import './style.scss'
import React, { useState, useEffect } from 'react'
import moment from 'moment'
import data from './data'

import Items from '../Items'
import Dateline from '../Dateline'


moment.prototype.daysInYear = function(){
  return this.isLeapYear() ? 366 : 365
}

export default function ( props ) {

  // Width of days
  const [ zoom ] = useState( 0.1 )

  // Items
  const [ items, setItems ] = useState( [] )
  // sort by start date
  items.sort( ( a, b ) => ( moment.min( a.start, b.start ) === b.start ) ? 1 : -1 )
  // if no data, set items
  useEffect( () => {

    setItems( data )

  }, [] )

  //
  const properties = {
    items,
    zoom,
    startDate: moment.min( items.map( item => item.start ) )
  }

  return ( <>

    <div className="timeline">
      <Items { ...properties } />
      <Dateline { ...properties } />
    </div>

  </> )

}
