import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'

import Context from '../../context'


export default function ( props ) {

  const context = useContext( Context );

  return ( <>

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

  </> )

}
