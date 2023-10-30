import React, { useContext } from 'react';
import Active from './Active';
import Complete from './Complete';
import { DataContext } from '../../context/DataProvider';

function MainContent() {
    const { showing, setShowing } = useContext(DataContext)
    let active, complete;
    switch (showing) {
        case "Active":
            active = <Active />;
            break;
        case "Complete":
            complete = <Complete />;
            break;
        case "All":
            active = <Active />;
            complete = <Complete />;
            break;
        default:
            active = <Active />;
    }
    return (
        <main>
            {active}
            {complete}
        </main>
    )

}
export default MainContent