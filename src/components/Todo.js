import React from 'react'
import PropTypes from 'prop-types'

const doNothing = () => {
  console.log('do nothing');
}

const Todo = ({ onClick, completed, text }) => (
  <li>
    <span style={{"width":"150px","display":"inline-block","background-color": (completed ? 'green' : 'red')}}>{text}</span>&nbsp;&nbsp;
    <button onClick={completed ? doNothing() : onClick}>
      {completed ? 'Done' : 'Mark as Done'}
    </button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
