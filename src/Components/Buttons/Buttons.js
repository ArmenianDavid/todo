import React from 'react'

const Buttons = (props) =>{
  const { filterTodos , status , clearTodos} = props
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
            <button
              onClick={() => clearTodos()}
              >
                Clear
                </button>

        </div>
    </div> 
  )
}

export default Buttons