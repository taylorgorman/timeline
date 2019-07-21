import moment from 'moment'
import color from 'color'

const categories = [
  {
    name: 'Friend',
    color: color('#0069ff'),
  },
  {
    name: 'Roommate',
    color: color('#80f10e'),
  },
  {
    name: 'Romance',
    color: color('#ff002b'),
  },
  {
    name: 'Place',
    color: color('#cc6532'),
  }
]

const items = [
  {
    category: 2,
    title: 'Whitney',
    start: moment('2006-04-07'),
    end: moment('2013-04-10'),
  },
  {
    category: 1,
    title: 'Justin',
    start: moment('2019-01-09'),
    end: moment(),
  },
  {
    category: 1,
    title: 'Ivor',
    start: moment('2018-08-01'),
    end: moment('2019-01-05'),
  },
  {
    category: 1,
    title: 'Maria',
    start: moment('2019-05-01'),
    end: moment(),
  },
  {
    category: 1,
    title: 'Frank',
    start: moment('2018-12-15'),
    end: moment(),
  },
  {
    category: 1,
    title: 'Jenna',
    start: moment('2018-01-16'),
    end: moment('2018-12-14'),
  },
  {
    category: 1,
    title: 'Matt',
    start: moment('2018-04-01'),
    end: moment('2019-04-15'),
  },
  {
    category: 1,
    title: 'Ivor',
    start: moment('2017-11-01'),
    end: moment('2018-03-31'),
  },
  {
    category: 0,
    title: 'Casey',
    start: moment('2006-08-17'),
    end: moment(),
  },
  {
    category: 1,
    title: 'Toni',
    start: moment('2017-11-01'),
    end: moment('2018-07-31'),
  },
  {
    category: 1,
    title: 'Michael',
    start: moment('2017-11-01'),
    end: moment('2017-12-31'),
  },
  {
    category: 1,
    title: 'Trevor',
    start: moment('2017-11-01'),
    end: moment('2018-04-30'),
  },
  {
    category: 3,
    title: 'The Dallas Pallace',
    start: moment('2017-11-01'),
    end: moment(),
  },
  {
    category: 3,
    title: 'Allison Wonderland',
    start: moment('2017-01-01'),
    end: moment('2017-10-31'),
  },
  {
    category: 1,
    title: 'Gordon',
    start: moment('2017-01-01'),
    end: moment('2017-10-31'),
  },
  {
    category: 1,
    title: 'Ed',
    start: moment('2017-01-01'),
    end: moment('2017-03-31'),
  },
  {
    category: 3,
    title: `Jared & Ali's`,
    start: moment('2016-08-01'),
    end: moment('2016-12-31'),
  },
  {
    category: 3,
    title: `Joe & Michelle's`,
    start: moment('2016-06-01'),
    end: moment('2016-07-31'),
  },
  {
    category: 3,
    title: `Mammaw & Pappaw's`,
    start: moment('2016-05-01'),
    end: moment('2016-05-31'),
  },
  {
    category: 3,
    title: `Allie's`,
    start: moment('2016-04-01'),
    end: moment('2016-04-30'),
  },
  {
    category: 3,
    title: `Bali`,
    start: moment('2016-01-03'),
    end: moment('2016-02-12'),
  },
  {
    category: 3,
    title: `Nashville`,
    start: moment('2015-10-01'),
    end: moment('2015-12-15'),
  },
  {
    category: 0,
    title: `Ivor`,
    start: moment('2015-10-04'),
    end: moment(),
  },
]

export default {
  categories,
  items,
}
