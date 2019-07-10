import './style.scss';
import React from 'react';
import moment from 'moment';

export default function ( props ) {

  // timeline boundaries
  const startDate = moment.min( props.items.map( item => item.start ) )

  // calculate extra data from items
  const itemsProcessed = props.items.map( item => {
    const daysLength = item.end.diff( item.start, 'd' )
    const daysSinceStart = item.start.diff( startDate, 'd' )
    return {
      ...item,
      daysLength,
      daysSinceStart,
      style: {
        width: ( daysLength + 1 ) * props.zoom + 'rem', // first and last days inclusive
        marginLeft: daysSinceStart * props.zoom + 'rem',
      },
    }
  } )

  return (

    <React.Fragment>
    { itemsProcessed.map( ( item, key ) => (
      <div className={ 'item ' + item.type } style={ item.style } key={ key }>
        <span className="title">
          { item.title }
        </span>
      </div>
    ) ) }
    </React.Fragment>

  )

}
