import React from "react";
class Input extends React.Component {
    constructor(){
        super();
        this.state={
            input : localStorage.getItem('input') ? localStorage.getItem('input') : '',
        }
    }
    componentDidMount() {
        this.nameInput.focus();
    }
    
    handleOnChange = (e) =>{
       localStorage.setItem('input', e.target.value)
       this.setState({
           input : e.target.value
       })
       console.log('yes')
    } 

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    className="input"
                    id="todo-input"
                    defaultValue={this.state.input}
                    onChange={this.handleOnChange}
                    ref={input => {
                        this.nameInput = input;
                    }}
                    onKeyDown={this.props.handleKeyDown}
                />
            </div>
        );
    }
}

export default Input;
