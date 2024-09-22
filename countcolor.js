import React, { useReducer } from "react";
function valueRed(state,action){
    switch(action){
        case 'increment':
            return {
                ...state,
                value:state.value+1
            }

        case 'decrement' :
            return {
                ...state,
                value:state.value-1
            }
        case 'green':
            return{
                ...state,
                color:'green'
            }
        case 'blue':
            return{
                ...state,
                color:'blue'
            }
        default:
            break;

    }
}
function Clr(){
    const[state,dispatch]=useReducer(valueRed,{
        value:0,
        color:'pink'
    })
    const add=()=>{
        dispatch('increment')
    }
    const sub=()=>{
        dispatch('decrement')
    }
    const change1=()=>{
        dispatch('green')
    }
    const change2=()=>{
        dispatch('blue')
    }
    return(
        <div>
            <h1 style={{backgroundColor:state.color}}>{state.value}</h1>
            <button onClick={add}>add</button>
            <button onClick={sub}>sub</button>
            <button onClick={change1}></button>
            <button onClick={change2}></button>
        </div>
    )
}
export default Clr