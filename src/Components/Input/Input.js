import React from "react";
class Input extends React.Component {
    componentDidMount() {
        this.nameInput.focus();
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    className="input"
                    id="todo-input"
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
