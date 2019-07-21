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
  const [ zoom ] = useState( 0.1 )

  // Items
  const [ items ] = useState( data.items )
  // sort by start date
  items.sort( ( a, b ) => ( moment.min( a.start, b.start ) === b.start ) ? 1 : -1 )

  return (

    <Context.Provider value={{
      ...data,
      items,
      zoom,
      themes,
      theme,
      changeTheme,
      startDate: moment.min( items.map( item => item.start ) ),
    }}>
      { props.children }
    </Context.Provider>

  )

}
