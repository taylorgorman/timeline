import './style.scss'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Timeline from '../Timeline'
import Admin from '../Admin'


export default function() {

  // Theme
  const [ isDarkTheme, setIsDarkTheme ] = useState( false )
  const toggleDarkTheme = () => {
    document.body.classList.toggle( 'theme-dark' )
    setIsDarkTheme( ! isDarkTheme )
  }

  return ( <>

    <Admin />
    <Timeline />
    <Button className="btn-dark-toggle" onClick={ toggleDarkTheme }>
      { isDarkTheme ? 'Light' : 'Dark' } theme
    </Button>

  </> )

}
