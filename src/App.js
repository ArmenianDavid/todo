import React from "react";
import Header from './Components/Header/Header'
import Input from './Components/Input/Input'
import Render from './Components/Render/Render'
import Buttons from './Components/Buttons/Buttons'
import TodoCounts from './Components/TodoCounts/TodoCounts'

import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            todoId: 0,
            filteredTodos : [],
            status : 'all',
        };
    }

    filterTodos = (status) =>{
        if( status === 'active'){
           const activeTodos = this.state.todos.filter( todo => todo.isComplited === false) 
           this.setState({ filteredTodos : activeTodos , status : status})
        }else if( status === 'complited'){
            const complitedTodos = this.state.todos.filter( todo => todo.isComplited === true) 
            this.setState({ filteredTodos : complitedTodos , status : status})
        }else if(status === 'clearAll'){
            this.setState({ todos : null , status : status})
        } else{
           this.setState({ filteredTodos : this.state.todos , status : status})
        }
    }

    handleKeyDown = e => {
        if (e.key === "Enter") {
            if(!e.target.value){ return '' } 
            this.setState({
                todos: [
                    ...this.state.todos,
                    {
                        id: this.state.todoId + 1,
                        name: e.target.value,
                        isComplited: false
                    }
                ],
                todoId: this.state.todoId + 1
            },() => this.filterTodos(this.state.status));
        } 
    };

    handleChangeTodoStatus = id => {
       const todos = this.state.todos;
       todos.find( todo => todo.id === id).isComplited = !todos.find( todo => todo.id === id).isComplited
    
       this.setState({
           todos
         },()=>this.filterTodos(this.state.status))
       }
    
    removeTodo = (id) =>{
       this.setState({
           todos : this.state.todos.filter( todo => todo.id !== id)
       },() => this.filterTodos(this.state.status))
    }

    clearTodos = () =>{
        this.setState({
            todos : [],
            filterTodos : []
        },()=>this.filterTodos(this.state.status))
    }


    render() {
        const { todos , status  } = this.state
        return (
            <div>
                <Header />
                <div className="todo-part">
                    <div className="todos-container">
                        <div className="todos">
                            <Input handleKeyDown={this.handleKeyDown}/>
                            <Render 
                                todos={this.state.filteredTodos} 
                                removeTodo={this.removeTodo} 
                                handleChangeTodoStatus={this.handleChangeTodoStatus} />
                            {todos.length ? <TodoCounts 
                                               status={status} 
                                               todos={todos} /> : null}
                            {todos.length ? <Buttons 
                                               filterTodos = {this.filterTodos} 
                                               status={this.state.status}
                                               clearTodos={this.clearTodos}
                                                /> : null}    
                        </div>
                       
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default App;
