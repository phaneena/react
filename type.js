import React,{useReducer} from "react";
function valreduce(state,action){
    switch(action.type){
        case 'change-value':
            return {
                ...state,
                value:state.value +action.payload
            }
        case 'change-color':
            return{
                ...state,
                color:action.payload
            }
        default:
            break
    }
}
function Type(){
    const[count,dispatch]=useReducer(valreduce,{
        value:0,
        color:'pink'
    })
    const chang1=()=>{
        dispatch({
            type:'change-value',
            payload:1
        })
    }
    const change2=()=>{
        dispatch({
            type:'change-value',
            payload:-1
        })
    }
    const change3=()=>{
        dispatch({
            type:'change-color',
            payload:'green'
        })
    }
    const change4=()=>{
        dispatch({
            type:'change-color',
            payload:'blue'
        })
    }
    return(
        <div>
        <p style={{background:count.color,height:'100px',width:'100px'}}>{count.value}</p>
        <button onClick={chang1}>+</button>
        <button onClick={change2}>-</button>
        <button onClick={change3}>green</button>
        <button onClick={change4}>blue</button>
        </div>
    )
}
export default Type