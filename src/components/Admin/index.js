import './style.scss'
import data from '../../data'
import React from 'react'
import { ListGroup } from 'react-bootstrap'


export default function ( props ) {

  return (

    <div className="admin">

      <h3 className="list-group-title">Categories</h3>
      <ListGroup variant="flush">
        { data.categories.map(
          ( category, key ) => <ListGroup.Item key={key}>{ category.name }</ListGroup.Item>
        ) }
      </ListGroup>

    </div>

  )

}
