/* eslint-disable no-unused-vars */
import { createContext , useContext } from "react";

export const ToDoContext = createContext ({
    todos : [
        {
            id : 1,
            todo : "ToDo msg",
            completed : false
        }
    ],
    addToDo : (todo) => {},
    updateToDo : (id , todo) => {},
    deleteToDo : (id) => {},
    toggleComplete : (id) => {}
})

export const useTodo = () => {
    return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider;