import React, { createContext, useState } from 'react'
import data from './data'
import moment from 'moment'


const Context = createContext()
export default Context

export function Provider( props ) {

  // Theme
  const themes = [
    'light',
    'dark',
  ]
  const [ theme, setTheme ] = useState( 'light' )
  const changeTheme = toThis => {
    themes.forEach( theme => document.body.classList.remove( 'theme-' + theme ) )
    setTheme( toThis )
  }
  document.body.classList.add( 'theme-' + theme )

  // Width of days
  const [ zoom ] = useState( 2 )

  // Items
  const [ items ] = useState( data.items )
  // sort by start date
  items.sort( ( a, b ) => ( moment.min( a.start, b.start ) === b.start ) ? 1 : -1 )

  // Dates
  const startDate = moment.min( items.map( item => item.start ) )
  const startYear = startDate.clone().startOf('year')
  const startMonth = startDate.clone().startOf('month')

  return (

    <Context.Provider value={{
      ...data,
      items,
      zoom,
      zoomUnits: 'px',
      themes,
      theme,
      changeTheme,
      startDate,
      startYear,
      startMonth,
    }}>
      { props.children }
    </Context.Provider>

  )

}
