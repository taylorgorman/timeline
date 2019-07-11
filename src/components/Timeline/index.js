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
        start: moment('2018-01-16'),
        end: moment('2018-12-15'),
      },
      {
        type: 'roommate',
        title: 'Matt',
        start: moment('2018-04-01'),
        end: moment('2019-04-15'),
      },
      {
        type: 'roommate',
        title: 'Ivor',
        start: moment('2017-11-01'),
        end: moment('2018-3-31'),
      },
      {
        type: 'friend',
        title: 'Casey',
        start: moment('2006-08-17'),
        end: moment(),
      },
      {
        type: 'roommate',
        title: 'Toni',
        start: moment('2017-11-01'),
        end: moment('2018-07-31'),
      },
      {
        type: 'roommate',
        title: 'Michael',
        start: moment('2017-11-01'),
        end: moment('2017-12-31'),
      },
      {
        type: 'roommate',
        title: 'Trevor',
        start: moment('2017-11-01'),
        end: moment('2018-04-30'),
      },
      {
        type: 'place',
        title: 'The Dallas Pallace',
        start: moment('2017-11-01'),
        end: moment(),
      },
      {
        type: 'place',
        title: 'Allison Wonderland',
        start: moment('2017-01-01'),
        end: moment('2017-10-31'),
      },
      {
        type: 'roommate',
        title: 'Gordon',
        start: moment('2017-01-01'),
        end: moment('2017-10-31'),
      },
      {
        type: 'roommate',
        title: 'Ed',
        start: moment('2017-01-01'),
        end: moment('2017-03-31'),
      },
      {
        type: 'place',
        title: `Jared & Ali's`,
        start: moment('2016-08-01'),
        end: moment('2016-12-31'),
      },
      {
        type: 'place',
        title: `Joe & Michelle's`,
        start: moment('2016-06-01'),
        end: moment('2016-07-31'),
      },
      {
        type: 'place',
        title: `Mammaw & Pappaw's`,
        start: moment('2016-05-01'),
        end: moment('2016-05-31'),
      },
      {
        type: 'place',
        title: `Allie's`,
        start: moment('2016-04-01'),
        end: moment('2016-04-30'),
      },
      {
        type: 'place',
        title: `Bali`,
        start: moment('2016-01-03'),
        end: moment('2016-02-12'),
      },
      {
        type: 'place',
        title: `Nashville`,
        start: moment('2015-10-01'),
        end: moment('2015-12-15'),
      },
      {
        type: 'friend',
        title: `Ivor`,
        start: moment('2015-10-04'),
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
