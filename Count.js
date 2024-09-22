import React, { useReducer} from "react";
function valReducer(state,action){
    if(action==='increment'){
        return state+1
    }
    else if(state===0){
        return 0
    }
    else{
        return state-1
    }
}
function Red(){
    const[count,dispatch]=useReducer(valReducer,0)
    const add=()=>{
        dispatch('increment')
    }
    const sub=()=>{
        dispatch('decrement')
    }
    return(
        <div>
            <h1>count is {count}</h1>
            <button onClick={add}>add</button>
            <button onClick={sub}>sub</button>
        </div>
    )
}
export default Red