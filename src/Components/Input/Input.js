import React from 'react'

const Input = (props) =>{
  return(
    <div>
      <input
          type="text"
          placeholder="What needs to be done?"
          className="input"
          id="todo-input"
          onKeyDown={props.handleKeyDown}
        />
      </div>
  )
}

export default Input