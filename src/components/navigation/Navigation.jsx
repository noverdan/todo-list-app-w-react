import React, { useContext, useState } from 'react';
import ButtonNav from './ButtonNav';
import { Icon } from '@iconify/react';
import { DataContext } from '../../context/DataProvider';

function Navigation() {
    const [infoActive, setInfoActive] = useState("Active")
    const { showing, setShowing } = useContext(DataContext)
    const handleDataFromChild = (data) => {
        setInfoActive(data)
        setShowing(data)
    };
    return (
        <>
            <nav className='flex justify-between items-center gap-8 mb-6'>
                <div className='flex gap-2'>
                    <ButtonNav name='Active' action="active" sendDataToParent={handleDataFromChild} />
                    <ButtonNav name='Complete' action="complete" sendDataToParent={handleDataFromChild} />
                    <ButtonNav name='All' action="all" sendDataToParent={handleDataFromChild} />
                </div>
                <ButtonNav name='Add Task' action="add" sendDataToParent={handleDataFromChild} icon={<Icon icon="material-symbols:add" width='21' />} />
            </nav>
            <div className='flex items-center gap-1'>
                <Icon icon="mingcute:filter-line" color="#2F2F2F" />
                <h1 className='font-semibold text-my-color-text underline underline-offset-4'>{infoActive}</h1>
            </div>
        </>
    )
}

export default Navigation