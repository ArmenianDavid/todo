import React from "react";
// components
import Header from "./Components/Header/Header";
import Input from "./Components/Input/Input";
import Render from "./Components/Render/Render";
import Buttons from "./Components/Buttons/Buttons";
import TodoCounts from "./Components/TodoCounts/TodoCounts";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: JSON.parse(localStorage.getItem("todos"))
                ? JSON.parse(localStorage.getItem("todos"))
                : [],
            todoId: localStorage.getItem("todoId")
                ? +localStorage.getItem("todoId")
                : 0,
            status: localStorage.getItem("status")
                ? localStorage.getItem("status")
                : "all"
        };
    }

    componentDidUpdate() {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
        localStorage.setItem("todoId", this.state.todoId);
        localStorage.setItem("status", this.state.status);
        console.log(localStorage);
    }

    handleRenameTodo = (e, id) => {
        if (e.key === "Enter") {
            if (!e.target.value) {
                return "";
            }
            const newArray = this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.name = e.target.value;
                    todo.isRenaming = !todo.isRenaming;
                }
                return todo;
            });
            this.setState({
                todos: newArray
            });
        }
    };

    renameTodo = id => {
        const newArray = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.isRenaming = !todo.isRenaming;
            }
            return todo;
        });
        this.setState({
            todos: newArray
        });
    };

    filterTodos = () => {
        let filteredTodos;
        if (this.state.status === "active") {
            filteredTodos = this.state.todos.filter(
                todo => todo.isComplited === false
            );
        } else if (this.state.status === "complited") {
            filteredTodos = this.state.todos.filter(
                todo => todo.isComplited === true
            );
        } else if (this.state.status === "clearAll") {
            filteredTodos = [];
        } else {
            filteredTodos = this.state.todos;
        }
        return filteredTodos;
    };

    handleKeyDown = e => {
        if (e.key === "Enter") {
            if (!e.target.value) {
                return null;
            }
            this.setState({
                todos: [
                    ...this.state.todos,
                    {
                        id: this.state.todoId + 1,
                        name: e.target.value,
                        isComplited: false,
                        isRenaming: false
                    }
                ],
                todoId: this.state.todoId + 1
            });
        }
    };

    handleChangeStateStatus = status => {
        console.log(status);
        this.setState({
            status: status
        });
    };

    handleChangeTodoStatus = id => {
        const todos = this.state.todos;
        todos.find(todo => todo.id === id).isComplited = !todos.find(
            todo => todo.id === id
        ).isComplited;

        this.setState({
            todos
        });
    };

    removeTodo = id => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    clearTodos = () => {
        this.setState(
            {
                todos: [],
                filterTodos: [],
                todoId: 0
            },
            localStorage.clear()
        );
    };

    render() {
        const { todos, status } = this.state;
        let normalizedTodos = this.filterTodos();
        return (
            <div>
                <Header />
                <div className="todo-part">
                    <div className="todos-container">
                        <div className="todos">
                            <Input handleKeyDown={this.handleKeyDown} />
                            <Render
                                todos={normalizedTodos}
                                removeTodo={this.removeTodo}
                                handleChangeTodoStatus={
                                    this.handleChangeTodoStatus
                                }
                                renameTodo={this.renameTodo}
                                handleRenameTodo={this.handleRenameTodo}
                            />
                            {todos.length ? (
                                <TodoCounts status={status} todos={todos} />
                            ) : null}
                            {todos.length ? (
                                <Buttons
                                    handleChangeStateStatus={
                                        this.handleChangeStateStatus
                                    }
                                    status={this.state.status}
                                    clearTodos={this.clearTodos}
                                />
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
