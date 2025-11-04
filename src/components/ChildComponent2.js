import React from "react";

const id = 2;
function ChildComponent2({handleSelectedOption}){
    return (
        <div
            style={{height: 100, width: 400, background: "yellow", padding: 10}}
            >
            <h2>Child Component {id}</h2>
            <button onClick={() => handleSelectedOption(id)} >Option {id}</button>
        </div>
    )
}

export default ChildComponent2;
