import React, { useContext } from 'react';
import { DataContext } from '../../context/DataProvider';

function ButtonNav(props) {
    const { dialog, setDialog } = useContext(DataContext)

    let buttonActive = "Active"
    let open = "task-open"
    const sendDataToParent = () => {
        props.sendDataToParent(buttonActive);
    };

    function handleClick(action) {
        switch (action) {
            case "active":
                buttonActive = "Active"
                break
            case "complete":
                buttonActive = "Complete"
                break
            case "all":
                buttonActive = "All"
                break
            case "add":
                const newData = { ...dialog, isOpen: true, todo: {} }
                setDialog(newData)
                break
        }
        sendDataToParent()
    }
    return (
        <>
            <button onClick={() => handleClick(props.action)} className='flex justify-center items-center text-my-color-text border border-solid border-my-color-grey-2 rounded box-border w-full px-3 group hover:text-my-color-grey-2 transition-all active:bg-my-color-grey-1'>
                <span className='text-my-color-text group-hover:text-my-color-grey-2 transition-all'>{props.icon}</span>
                {props.name}
            </button>
            {/* <Popup open="task-open" /> */}
        </>
    )
}

export function InfoActive() {
    return (
        <>
            <h1>handleClick</h1>
        </>
    )
}


export default ButtonNav;