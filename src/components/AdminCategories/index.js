import React, { useContext } from 'react'
import { ListGroup, Form } from 'react-bootstrap'
import { Settings } from 'react-feather'

import Context from '../../context'


export default function ( props ) {

  const context = useContext( Context );

  return ( <>

    <style>
      { context.categories.map( ( category, key ) => (
      `#category-` + key + `:checked ~ .custom-control-label::before {
        border-color: ` + category.color + `;
        background-color: ` + category.color + `;
      }`
      ) ) }
    </style>

    <ListGroup variant="flush">
      { context.categories.map( ( category, key ) => (
        <ListGroup.Item key={key} className="category">
        <div className="align">
          <Form.Check
            custom
            checked
            type="checkbox"
            id={ `category-` + key }
            label={ category.name }
          />
          <Settings size={ 16 } />
        </div>
        </ListGroup.Item>
      ) ) }
    </ListGroup>

  </> )

}
