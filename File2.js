import React, { useState } from "react";

function File2(){
    const[text,setText]=useState('')
    const[state,setState]=useState([])
    function change(e){
        setText(e.target.value)
    }

    function textchange(){
        setState((s)=>[...s,text])
    }
    return(
        <div>
        <input type='text' onChange={change} /> 
        <button onClick={textchange}>
        
       </button>
       <ul>
            {state.map((text)=><li>{text}</li>)}
            
        </ul>
       </div>
    )
}
export default File2