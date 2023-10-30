import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext()

function DataProvider({ children }) {
    // const initiate = []
    // localStorage.setItem("todos", JSON.stringify(initiate));
    let getData = localStorage.getItem("todos");
    let storedData = JSON.parse(getData);
    const [todos, setTodos] = useState(storedData)

    useEffect(() => {
        const dataString = JSON.stringify(todos);
        localStorage.setItem("todos", dataString);
        console.log(dataString);
    }, [todos]);

    const [showing, setShowing] = useState("Active")
    const [dialog, setDialog] = useState({
        isOpen: false,
        todo: {}
    })

    return (
        <DataContext.Provider value={{ todos, setTodos, showing, setShowing, dialog, setDialog }}>
            {children}
        </DataContext.Provider>
    )
}
export { DataContext, DataProvider }