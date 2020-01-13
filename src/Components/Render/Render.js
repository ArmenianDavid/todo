import React from 'react'

const Render = (props) =>{
   const {todos , removeTodo , handleChangeTodoStatus} = props

   return(
    <div>
    {todos.map(todo => {
        return (
            <div
              key={todo.id}
              className={`todo`}>
                
                <div>
                    <input
                        id={todo.id}
                        type="checkbox"
                        className="mark"
                        checked={todo.isComplited ? true : false}
                        onClick={() => handleChangeTodoStatus(todo.id)}/>

                    <span className={todo.isComplited ? "complited" : "active"}>
                       {todo.name}
                    </span>
                </div>
                <div className="x-icon">
                    <span
                      className='remove-x'
                      style={{ fontSize: "25px" }}
                      onClick={() => removeTodo(todo.id)}>
                        &#10008;
                    </span>
                </div>
            </div>
        );
    })}
</div>
   )
}

export default Render