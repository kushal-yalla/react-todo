import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ onClick, completed, text, number }) => (
  <li className={'item'}
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    
    {text} <br></br>
    <button type="button" >complete</button>
    
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Item