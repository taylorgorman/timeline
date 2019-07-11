import './style.scss';
import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Items from '../Items';
import Dateline from '../Dateline';


moment.prototype.daysInYear = function(){
  return this.isLeapYear() ? 366 : 365;
}

export default function Timeline( props ) {

  const [zoom] = useState( 0.1 );

  const [items, setItems] = useState( [] );
  items.sort( ( a, b ) => ( moment.min( a.start, b.start ) === b.start ) ? 1 : -1 )
  useEffect( () => { console.log('useEffect setItems');

    setItems([
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
      {
        type: 'friend',
        title: 'Casey',
        start: moment('2006-08-17'),
        end: moment(),
      },
    ])

  }, [] )

  return (

    <div className="timeline">
      <Items
        items={ items }
        zoom={ zoom }
      />
      <Dateline
        items={ items }
        zoom={ zoom }
      />
    </div>

  )

}
