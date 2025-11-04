import React from "react";

const id = 1;
function ChildComponent1({handleSelectedOption}){
    const updateParentState = () => {
        handleSelectedOption(id);
    }
    return (
        <div
            style={{height: 100, width: 400, background: "orange", padding: 10}}
            >
            <h2>Child Component {id}</h2>
            <button onClick={updateParentState}>Option {id}</button>
        </div>
    )
}

export default ChildComponent1;
