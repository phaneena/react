import React,{useState} from "react";

function Prestate(){
    const[count,setCount]=useState(0)
    function increment5(){
        for(let i=0;i<5;i++)
            setCount(preCount=>preCount+1)
    }
    return(
        <div>
            count{count}
            <button onClick={()=>setCount(0)}>reset</button>
            <button onClick={()=>{setCount(preCount=>preCount+1)}}>increment</button>
            <button onClick={()=>{setCount(count-1)}}>decrement</button>
            <button onClick={increment5}>increment5</button>

        </div>
    )
}
export default Prestate