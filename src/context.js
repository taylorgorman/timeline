import React, { createContext, useState, useEffect } from 'react'
import moment from 'moment'

import data from './data'
import firebase from './utilities/firebase'


const Context = createContext()
export default Context

export function Provider( props ) {

  // Settings
  //
  const [ zoom ] = useState( 1.5 )

  // Theme
  const themes = [
    'light',
    'dark',
  ]
  const [ theme, setTheme ] = useState( 'dark' )
  const changeTheme = ( toThis ) => {
    themes.forEach( theme => document.body.classList.remove( 'theme-' + theme ) )
    setTheme( toThis )
  }
  document.body.classList.add( 'theme-' + theme )

  // Categories
  //
  const [ categories, setCategories ] = useState([])

  const setCategory = ( newCategory ) => {
    setCategories( categories.map( category => {
      if ( category.id === newCategory.id )
        return newCategory
      else
        return category
    } ) )
  }

  // Items
  //
  const [ items, setItems ] = useState([])

  // Sort by start date
  items.sort( ( a, b ) => ( moment.min( a.start, b.start ) === b.start ) ? 1 : -1 )

  // Dates
  const startDate = moment.min( items.map( item => item.start ) )
  const startYear = startDate.clone().startOf('year')
  const startMonth = startDate.clone().startOf('month')


  // On load
  //
  useEffect( () => {
    setItems( data.items )
    setCategories( data.categories )
  }, [] )

  return (

    <Context.Provider value={{
      categories,
      items,
      zoom,
      zoomUnits: 'px',
      themes,
      theme,
      changeTheme,
      setCategory,
      startDate,
      startYear,
      startMonth,
      firebase,
    }}>
      { props.children }
    </Context.Provider>

  )

}
