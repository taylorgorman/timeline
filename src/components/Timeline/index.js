import React from 'react';
import moment from 'moment';
import './style.css';

moment.prototype.daysInYear = function(){
  return this.isLeapYear() ? 366 : 365;
}

export default class Timeline extends React.Component {

  state = {
    items: []
  }

  widthMultiplier = .3

  render() { console.log('render()');

    // timeline boundaries
    const startDate = moment.min( this.state.items.map( item => item.start ) )
    const startYear = startDate.clone().startOf('year')
    const startMonth = startDate.clone().startOf('month')
    const endDate = moment.max( this.state.items.map( item => item.end ) )
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
        console.log('is first year', daysIn);
      }

      // Is last year
      if ( iYear.isSame( endYear ) ) {
        daysIn = endMonth.clone().endOf('month').diff( endYear, 'd' ) + 1
        console.log('is last year', daysIn);
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

    // calculate extra data from items
    const itemsProcessed = this.state.items.map( item => {
      const daysLength = item.end.diff( item.start, 'd' )
      const daysSinceStart = item.start.diff( startDate, 'd' )
      return {
        ...item,
        daysLength,
        daysSinceStart,
        style: {
          width: ( daysLength + 1 ) * this.widthMultiplier + 'rem', // first and last days inclusive
          marginLeft: daysSinceStart * this.widthMultiplier + 'rem',
        },
      }
    } )

    // render marks for days of month
    const renderMarks = ( n ) => {
      let marks = [];
      for ( let i = 0; i < n; i++ ) {
        marks.push( <div className="month-mark" style={{ width: 'calc(' + this.widthMultiplier + 'rem - 1px)' }} key={ i } /> )
      }
      return marks;
    }

    // init year vars
    let thisYear = startDate.clone().startOf( 'year' )
    let lastYear = thisYear.subtract( 1, 'year' )
    let showYear = true
    let yearDaysLength = 0

    console.log('years before render()',years);
    return (

      <div className={ 'timeline' + ( this.widthMultiplier < .5 ? ' no-day-marks' : '' ) }>

        { itemsProcessed.map( ( item, key ) => (
          <div className="item" style={ item.style } key={ key }>
            <span className="title">
              { item.title }
            </span>
          </div>
        ) ) }

        <div className="time-line">
          <div className="years">
          { years.map( ( year, key ) => (
            <div className="year" style={{ width: year.daysIn * this.widthMultiplier + 'rem' }} key={key}>
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

      </div>

    )
  }

  componentDidMount() { console.log('componentDidMount()');

    let items = [
      {
        type: 'person',
        title: 'Jason',
        start: moment('2018-09-07'),
        end: moment('2019-02-10'),
      },
      {
        type: 'person',
        title: 'Alex',
        start: moment('2019-01-22'),
        end: moment('2019-08-13'),
      },
      {
        type: 'person',
        title: 'Marsha',
        start: moment('2018-11-21'),
        end: moment('2019-07-03'),
      },
    ]

    this.setState({items});

  }

}
