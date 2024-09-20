import React,{useState} from "react";
import File from "./File";
function Count(){
    const[count,setCount]=useState(0)
    const increment=()=>{
        setCount((c)=>c+1)
    }
    const decrement=()=>{
        setCount((c)=>c===0?0:c-1)
    }

    return(
        <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <File value={count} />
            {count%5===0 && count!==0 ? <h1>it is divisible by 5</h1> :''}
        </div>
    )
}
export default Count