import React, { useContext } from 'react'
import { ListGroup, Form } from 'react-bootstrap'

import './style.scss'
import Context from '../../context'


export default function ( props ) {

  const context = useContext( Context );

  return (

    <div className="admin">

      <h3 className="admin-title">Categories</h3>

      <ListGroup variant="flush">
        { context.categories.map( ( category, key ) => (
          <ListGroup.Item key={key} className="category">
          <div className="align">
            <span className="name">{ category.name }</span>
            <span className="color" style={{ backgroundColor:category.color }} />
          </div>
          </ListGroup.Item>
        ) ) }
      </ListGroup>

      <h3 className="admin-title">Settings</h3>

      <Form.Group controlId="day-width">
        <Form.Label>Day width</Form.Label>
        <Form.Control type="range" />
      </Form.Group>
      <Form.Group controlId="theme">
        <Form.Label>Theme</Form.Label>
        { context.themes.map( ( theme, key ) => (
          <Form.Check
            custom
            type='radio'
            id={ theme }
            name='theme'
            label={ theme.capitalize() }
            onChange={ ()=> context.changeTheme( theme ) }
            checked={ theme === context.theme }
            key={ key }
          />
        ) ) }
      </Form.Group>

    </div>

  )

}
