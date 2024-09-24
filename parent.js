import React, { useState } from "react";
import Child from "./child";
function Parent(){
    const[count,setCount]=useState(0)
    const[name,setName]=useState('haneena')
    console.log('renderd parenn')
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>add</button>
            <h1>count is {count}</h1>
            <button onClick={()=>setName('Shanu')}>name</button>
            <Child value={name} />
        </div>
    )
}
export default Parent