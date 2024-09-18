import React,{useState} from "react";

function Counter(){
    const[count,setCount]=useState(0);
    function change(){
        setCount(count+1);
    }
    return(
        <div>
            <button onClick={change}>increment</button>
            <h1>{count}</h1>
        </div>
    )
}
export default Counter