import React,{ useState } from "react";
import File from "./File";

function State(){
    const[count,setCount]=useState(0);
    function Increment(){
        setCount(p=>p+1)
    }
    function decrement(){
        setCount((p)=>(p===0?0:p-1))
    }
    return(
        <div>
            <button onClick={Increment}>increment</button>
            {count===10?<h1>count is 10</h1>:''}
            <button onClick={decrement}>decrement</button>
            <File value={count} />
        </div>
    )
}
export default State