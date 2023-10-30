import React, { useContext, useState } from 'react';
import { Icon } from '@iconify/react';
import { DataContext } from '../../context/DataProvider';
import Warning from '../dialog/Warning'


function Active() {
    const { todos, setTodos } = useContext(DataContext)
    const { dialog, setDialog } = useContext(DataContext)
    let activeTodos = todos.filter((todo) => !todo.isDone)
    let completeTodos = todos.filter((todo) => todo.isDone)
    console.log(activeTodos);

    const handleCheckboxChange = (id) => {
        let checkedTodo = {}
        let newActiveTodos = []
        setTimeout(() => {
            const newTodos = todos.map(item => {
                if (item.id === id) {
                    newActiveTodos = activeTodos.filter(item => item.id !== id);
                    checkedTodo = { ...item, isDone: !item.isDone }
                    return checkedTodo;
                }
                return item;
            });
            completeTodos.unshift(checkedTodo)
            setNewTodos(newActiveTodos, completeTodos)
        }, 1000)
    }

    function setNewTodos(active, complete) {
        let newTodos = [...active, ...complete]
        setTodos(newTodos)
    }
    function editHandle(id) {
        let selectedTodo = todos.filter((todo) => todo.id === id)
        const todoOnChange = { ...dialog, isOpen: true, todo: selectedTodo[0] }
        setDialog(todoOnChange)
    }
    function deleteHandle(idRemove) {
        // let selectedTodo = todos.filter((todo) => todo.id === idRemove)
        const newActiveTodos = activeTodos.filter(item => item.id !== idRemove);
        const newTodos = [...newActiveTodos, ...completeTodos]
        setTodos(newTodos)
    }

    return (
        <>
            {activeTodos.length > 0 ?
                activeTodos.map((todo) => {
                    return (
                        <div key={todo.id} className='flex w-full items-center border border-solid border-my-color-red-1 rounded px-4 py-3 mt-3' >
                            <div className='--checkbox'>
                                <label className="checkbox-btn">
                                    <label htmlFor="checkbox"></label>
                                    <input id="checkbox" type="checkbox" onChange={() => handleCheckboxChange(todo.id)} />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className='--task-name mx-4'>
                                <p>{todo.task}</p>
                            </div>
                            <div className='--edit-delete flex gap-2 ml-auto'>
                                <button onClick={() => editHandle(todo.id)}>
                                    <span className='text-my-color-grey-2 cursor-pointer transition-all hover:text-my-color-text active:text-my-color-text'>
                                        <Icon icon="iconamoon:edit" width="20" height="20" />
                                    </span>
                                </button>
                                <button onClick={() => deleteHandle(todo.id)}>
                                    <span className='text-my-color-red-1 cursor-pointer transition-all hover:text-my-color-red-2 active:text-my-color-red-2'>
                                        <Icon icon="ic:outline-delete" width="20" height="20" />
                                    </span>
                                </button>
                            </div>
                        </div >
                    )
                }) : <h1 className='text-my-color-grey-2 text-center my-10'>Your unfinished todo list is empty...</h1>
            }
        </>
    )

}
export default Active