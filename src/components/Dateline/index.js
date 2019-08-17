import './style.scss';
import React, { useContext } from 'react';
import Context from '../../Context'
import moment from 'moment';

export default function ( props ) {

  const context = useContext( Context );

  // timeline boundaries
  const { startYear, startMonth } = context
  const endDate = moment.max( context.items.map( item => item.end ) )
  const endYear = endDate.clone().startOf('year')
  const endMonth = endDate.clone().startOf('month')

  // collect years
  let years = []
  let iYear = startYear.clone()
  while ( moment.min( iYear, endDate ) === iYear ) {

    // All middle years
    let daysIn = iYear.daysInYear()

    // Is first year
    if ( iYear.isSame( startYear ) ) {
      daysIn = startYear.clone().endOf('year').diff( startMonth, 'd' ) + 1
    }

    // Is last year
    if ( iYear.isSame( endYear ) ) {
      daysIn = endMonth.clone().endOf('month').diff( endYear, 'd' ) + 1
    }

    // Save
    years.push({
      moment: iYear.clone(),
      daysIn,
    });

    // Increment
    iYear.add( 1, 'Y' );
  }

  // collect months
  let months = [];
  let iMonth = startMonth.clone();
  while ( moment.min( iMonth, endDate ) === iMonth ) {
    months.push( iMonth.clone() );
    iMonth.add( 1, 'M' );
  }

  return (

    <div className='dateline'>
      <div className="years">
      { years.map( ( year, key ) => (
        <div className="year" style={{ width: year.daysIn * context.zoom + context.zoomUnits }} key={key}>
          <span className="name">{ year.moment.format('YYYY') }</span>
        </div>
      ) ) }
      </div>
      <div className="months">
      { months.map( ( month, key ) => (
        <div className="month" key={ key } style={{ width: month.daysInMonth() * context.zoom + context.zoomUnits }}>
          { month.format('MMM') }
        </div>
      ) ) }
      </div>
    </div>

  )

}
