import React from 'react'

const Buttons = (props) =>{
  const { filterTodos , status } = props
  return (
    <div className='buttons-container'>
        <div>
            <button
              className={status === 'all' ? 'select' : ''}
              onClick={() =>filterTodos('all')}
             >
                All
                </button>
            <button
              className={status === 'active' ? 'select' : ''}
              onClick={() =>filterTodos('active')}
              >
                Active
                </button>
            <button
              className={status === 'complited' ? 'select' : ''}
              onClick={() =>filterTodos('complited')}
             >
                Comlited
                </button>
        </div>
    </div> 
  )
}

export default Buttons