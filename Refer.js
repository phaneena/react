import { useRef } from "react";

function Refer(){
    const c=useRef(null)
    const myStyle={
        backgroundColor:'blue',
        padding:'10px'
    }
    const change=()=>{
        if(c.current){
            c.current.style.backgroundColor=c.current.style.backgroundColor==='blue'?'pink':'blue'
        }
    }
    return(
        <div>
            <div ref={c} style={myStyle} onClick={change}></div>
        </div>
    )
}
export default Refer