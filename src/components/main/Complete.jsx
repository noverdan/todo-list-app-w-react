import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

function Complete() {
    const { todos, setTodos } = useContext(DataContext)
    let activeTodos = todos.filter((todo) => !todo.isDone)
    let completeTodos = todos.filter((todo) => todo.isDone)

    const handleClickUndone = (id) => {
        let undoneTodo = {}
        let newCompleteTodos = []
        const newTodos = todos.map(item => {
            if (item.id === id) {
                newCompleteTodos = completeTodos.filter(item => item.id !== id);
                undoneTodo = { ...item, isDone: !item.isDone }
                return undoneTodo;
            }
            return item;
        });
        activeTodos.push(undoneTodo)
        setNewTodos(activeTodos, newCompleteTodos)

    }

    function setNewTodos(active, complete) {
        let newTodos = [...active, ...complete]
        setTodos(newTodos)
    }


    return (
        <>
            <hr className='mx-4 my-4 border-my-color-text border-opacity-30' />
            {completeTodos.length > 0 ?
                completeTodos.map((todo) => {
                    return (
                        <div key={todo.id} className='flex w-full items-center border border-solid border-my-color-green rounded px-4 py-3 mt-3' >
                            <div className='--checkbox'>
                                <label className="checkbox-btn">
                                    <label htmlFor="checkbox"></label>
                                    <input id="checkbox" type="checkbox" readOnly={true} checked={todo.isDone} />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className='--task-name mx-4'>
                                <p>{todo.task}</p>
                            </div>
                            <div className='--undone flex ml-auto'>
                                <h1 onClick={() => handleClickUndone(todo.id)} className='text-my-color-red-1 text-xs font-medium hover:text-my-color-red-2 active:text-my-color-red-2 cursor-pointer select-none'>Undone</h1>
                            </div>
                        </div >
                    )
                }) : <h1 className='text-my-color-grey-2 text-center my-10'>You don't have any completed todos yet...</h1>
            }

        </>
    )

}
export default Complete