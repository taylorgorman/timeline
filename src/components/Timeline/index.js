import './style.scss';
import React from 'react';
import moment from 'moment';

import Items from '../Items';
import Dateline from '../Dateline';


moment.prototype.daysInYear = function(){
  return this.isLeapYear() ? 366 : 365;
}

export default class Timeline extends React.Component {

  state = {
    items: [],
    zoom: 0.1,
  }

  render() {

    this.state.items.sort( ( a, b ) => ( moment.min( a.start, b.start ) === b.start ) ? 1 : -1 )

    return (

      <div className="timeline">
        <Items
          items={ this.state.items }
          zoom={ this.state.zoom }
        />
        <Dateline
          items={ this.state.items }
          zoom={ this.state.zoom }
        />
      </div>

    )
  }

  componentDidMount() { console.log('componentDidMount()');

    let items = [
      {
        type: 'romance',
        title: 'Whitney',
        start: moment('2006-04-07'),
        end: moment('2013-04-10'),
      },
      {
        type: 'roommate',
        title: 'Justin',
        start: moment('2019-01-09'),
        end: moment(),
      },
      {
        type: 'roommate',
        title: 'Ivor',
        start: moment('2018-08-01'),
        end: moment('2019-01-05'),
      },
      {
        type: 'roommate',
        title: 'Maria',
        start: moment('2019-05-01'),
        end: moment(),
      },
      {
        type: 'roommate',
        title: 'Frank',
        start: moment('2018-12-15'),
        end: moment(),
      },
      {
        type: 'roommate',
        title: 'Jenna',
        start: moment('2018-02-01'),
        end: moment('2018-12-15'),
      },
      {
        type: 'roommate',
        title: 'Matt',
        start: moment('2018-01-01'),
        end: moment('2019-04-15'),
      },
    ]

    this.setState({items});

  }

}
