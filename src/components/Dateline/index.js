import './style.scss';
import React from 'react';
import moment from 'moment';

export default function ( props ) {

  // timeline boundaries
  const startDate = moment.min( props.items.map( item => item.start ) )
  const startYear = startDate.clone().startOf('year')
  const startMonth = startDate.clone().startOf('month')
  const endDate = moment.max( props.items.map( item => item.end ) )
  const endYear = endDate.clone().startOf('year')
  const endMonth = endDate.clone().startOf('month')

  // collect years
  let years = []
  let iYear = startYear.clone()
  while ( moment.min( iYear, endDate ) === iYear ) {

    //console.log(`iYear`, iYear.format('MM DD YYYY'));
    //console.log(`startYear`, startYear.format('MM DD YYYY'));
    //console.log(`endYear`, endYear.format('MM DD YYYY'));

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

  // render marks for days of month
  const renderMarks = ( n ) => {
    let marks = [];
    for ( let i = 0; i < n; i++ ) {
      marks.push( <div className="month-mark" style={{ width: 'calc(' + props.zoom + 'rem - 1px)' }} key={ i } /> )
    }
    return marks;
  }

  return (

    <div className={ 'dateline' + ( props.zoom < .5 ? ' no-day-marks' : '' ) }>
      <div className="years">
      { years.map( ( year, key ) => (
        <div className="year" style={{ width: year.daysIn * props.zoom + 'rem' }} key={key}>
          <span className="name">{ year.moment.format('YYYY') }</span>
        </div>
      ) ) }
      </div>
      <div className="months">
      { months.map( ( month, key ) => (
        <div className="month" key={key}>

          <div className="month-marks">
            { renderMarks( month.daysInMonth() ) }
          </div>
          <div className="month-name">
            { month.format('MMM') }
          </div>
        </div>
      ) ) }
      </div>
    </div>

  )

}
