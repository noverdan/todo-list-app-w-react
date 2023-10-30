import { Modal, Textarea } from 'flowbite-react';
import React, { useState, createContext, useContext } from 'react';
import { DataContext } from '../../context/DataProvider';


function Popup() {
    const { dialog, setDialog } = useContext(DataContext)
    const [inputValue, setInputValue] = useState('');
    const { todo } = dialog
    const { todos, setTodos } = useContext(DataContext)
    let activeTodos = todos.filter((todo) => !todo.isDone)
    let completeTodos = todos.filter((todo) => todo.isDone)

    function closeDialog() {
        const newData = { ...dialog, isOpen: false }
        setDialog(newData)
    }
    function saveChanges(e) {
        e.preventDefault()
        if (todo.task) {
            if (inputValue) {
                const updateTodo = activeTodos.map(item => {
                    if (item.id === todo.id) {
                        return { ...item, task: inputValue };
                    }
                    return item;
                });
                const newTodos = [...updateTodo, ...completeTodos]
                setTodos(newTodos)
                const newData = { ...dialog, isOpen: false }
                setDialog(newData)
            }

        } else {
            if (inputValue) {
                let generateId = randomId()
                const newData = { ...dialog, isOpen: false, todos: { id: generateId, isDone: false, task: inputValue } }
                activeTodos.unshift(newData.todos)
                const newTodos = [...activeTodos, ...completeTodos]
                console.log(newTodos);
                setTodos(newTodos)
                setDialog(newData)
            } else {

            }
        }


    }
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <>
            <Modal show={dialog.isOpen} size="md" popup onClose={closeDialog}>
                <Modal.Body>
                    <div className="space-y-4">
                        <div className='flex justify-between items-center mt-2'>
                            <h3 className="text-xl font-medium text-my-color-text">{todo.task ? "Edit Task" : "New Task"}</h3>
                            <Modal.Header className='inline-block focus:border-none' />
                        </div>
                        <div>
                            <form action="">
                                <Textarea defaultValue={todo.task} onChange={handleInputChange} rows='4' id="task" className='resize-none text-my-color-text focus:ring-my-color-grey-1 focus:border-my-color-grey-2' placeholder="Input Task" required />
                                <div className="w-full flex gap-5 justify-end mt-4">
                                    <button onClick={closeDialog} className='px-3 py-1 bg-my-color-grey-1 text-white rounded hover:bg-my-color-grey-2 active:ring-2 active:ring-my-color-grey-2'>Cancel</button>
                                    <button type='submit' onClick={saveChanges} className='px-4 py-1 bg-my-color-green text-white rounded hover:bg-[#169d24] active:ring-2 active:ring-[#169d24]'>Save</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
const randomId = () => {
    return Math.random().toString(36).substr(3, 5);
};
export default Popup