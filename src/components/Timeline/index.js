import React from 'react';
import moment from 'moment';

export default class Timeline extends React.Component {

  state = {
    items: [
      {
        type: 'person',
        title: 'Jason',
        start: moment('2018-09-01'),
        end: moment('2019-04-01'),
      },
      {
        type: 'person',
        title: 'Alex',
        start: moment('2019-01-01'),
        end: moment('2019-08-01'),
      },
      {
        type: 'person',
        title: 'Marsha',
        start: moment('2019-03-01'),
        end: moment('2019-07-01'),
      },
    ],
  }

  startDate = moment.min( this.state.items.map( item => item.start ) )
  endDate = moment.max( this.state.items.map( item => item.end ) )

  widthMultiplier = .3

  itemStyle = ( item ) => ({
    width: item.end.diff( item.start, 'd' ) * this.widthMultiplier + 'em',
    marginLeft: item.start.diff( this.startDate, 'd' ) * this.widthMultiplier + 'em',
  })

  render() {

    let months = [];
    let iMonth = this.startDate;
    while ( moment.min( iMonth, this.endDate ) === iMonth ) {
      months.push({
        name: iMonth.format('MMM YYYY'),
        daysIn: iMonth.daysInMonth(),
      });
      iMonth.add( 1, 'M' );
    }

    return (

    <div className="timeline">
      { this.state.items.map( ( item, key ) => { console.log('this.itemStyle(item)',this.itemStyle(item)); return (
        <div className="item" style={ this.itemStyle(item) } key={key}>
          <span className="title">
            { item.title }
          </span>
        </div>
      ) } ) }

      <div className="time-line">
      { months.map( ( month, key ) => (
        <div className="month" style={{ width: month.daysIn * this.widthMultiplier + 'em' }} key={key}>{ month.name }</div>
      ) ) }
      </div>
    </div>

    )
  }

}
