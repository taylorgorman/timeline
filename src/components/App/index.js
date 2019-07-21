import React from 'react'
import moment from 'moment'

import './style.scss'
import Timeline from '../Timeline'
import Admin from '../Admin'


moment.prototype.daysInYear = function(){
  return this.isLeapYear() ? 366 : 365
}
String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1)
}

export default function() {

  return ( <>

    <Admin />
    <Timeline />

  </> )

}
