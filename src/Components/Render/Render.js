import React from 'react'

class Render extends React.Component{


   render(){
        const {todos , removeTodo , handleChangeTodoStatus , renameTodo , handleRenameTodo} = this.props

   return(
    <div>
    {todos.map(todo => {
        return (
            <div
              key={todo.id}
              className={`todo`}>
                
                <div className='todo-left-part'>
                    <input
                        id={todo.id}
                        type="checkbox"
                        className="mark"
                        defaultChecked={todo.isComplited ? true : false}
                        onClick={() => handleChangeTodoStatus(todo.id)}/>

                    <div className='todo-text-container' onDoubleClick={() =>renameTodo(todo.id)}>
                       <span 
                         style={todo.isRenaming ? {display : 'none'} : {display : 'block'} }
                         className={todo.isComplited ? "complited" : "active"}>
                           {todo.name}
                       </span>
                       {console.log(todo.isRenaming)}
                       <input 
                         defaultValue={todo.name}
                         onKeyDown={(e) =>handleRenameTodo(e , todo.id)}
                         className='todo-text-container-input'
                         style={todo.isRenaming ? {display : 'block'} : {display : 'none'}  }
                         type='text' />
                     </div>
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
   }
 

export default Render