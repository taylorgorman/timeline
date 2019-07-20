import './style.scss'
import React from 'react'
import moment from 'moment'

export default function ( props ) {

  const { startDate } = props

  // manipulate rows
  let rows = [{
    id: 1,
    latestDate: moment('1900-01-01'),
  }]

  const getRow = item => {

    // filter to rows ending before this item starts
    const rowsEndingBeforeItem = rows.filter(
      row => moment.max( item.start, row.latestDate ) === item.start
    )

    // we have rows
    if ( rowsEndingBeforeItem.length > 0 ) {
      // we'll use the lowest row we found
      const newRow = rowsEndingBeforeItem[0]
      // replace row
      rows[rows.indexOf( newRow )] = {
        id: newRow.id,
        latestDate: item.end,
      }

      return newRow.id
    }

    // we do not have rows
    else {
      // start a new row
      const newRowId = rows.slice(-1)[0].id + 1
      rows.push({
        id: newRowId,
        latestDate: item.end,
      })

      return newRowId
    }

  }

  // calculate extra data from items
  const itemsProcessed = props.items.map( item => {

    const daysLength = item.end.diff( item.start, 'd' )
    const daysSinceStart = item.start.diff( startDate, 'd' )

    return {
      ...item,
      daysLength,
      daysSinceStart,
      style: {
        width: ( daysLength + 1 ) * props.zoom + 'rem', // +1 to include both first and last days
        left: daysSinceStart * props.zoom + 'rem',
        bottom: getRow( item ) * 1.7 + 'em', // *1.7 to accommodate for padding
      },
    }

  } )

  return (

    <div className="items">
    { itemsProcessed.map( ( item, key ) => (
      <div className={ 'item ' + item.type } style={ item.style } key={ key }>
        <span className="title">
          { item.title }
        </span>
      </div>
    ) ) }
    </div>

  )

}
