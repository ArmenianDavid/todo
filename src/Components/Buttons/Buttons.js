import React from "react";

const Buttons = props => {
    const { handleChangeStateStatus, status, clearTodos } = props;
    return (
        <div className="buttons-container">
            <div>
                <button
                    className={status === "all" ? "select" : ""}
                    onClick={() => handleChangeStateStatus("all")}
                >
                    All
                </button>
                <button
                    className={status === "active" ? "select" : ""}
                    onClick={() => handleChangeStateStatus("active")}
                >
                    Active
                </button>
                <button
                    className={status === "complited" ? "select" : ""}
                    onClick={() => handleChangeStateStatus("complited")}
                >
                    Comlited
                </button>
                <button onClick={() => clearTodos()}>Clear</button>
            </div>
        </div>
    );
};

export default Buttons;
