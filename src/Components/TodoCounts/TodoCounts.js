import React from "react";

const TodoCounts = props => {
    const { todos } = props;
    const active = todos.filter(todo => todo.isComplited === false);
    return <div>{active.length ? `${active.length} items left` : null}</div>;
};

export default TodoCounts;
