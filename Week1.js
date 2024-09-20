import React, { useRef} from "react";

function Week1(){
    const c1=useRef(null);
    const c2=useRef(null);
    const change1=()=>{
            c1.current.style.backgroundColor=c1.current.style.backgroundColor==='black'?'blue':'black'   
            c2.current.style.backgroundColor=c2.current.style.backgroundColor==='blue'?'black':'blue'
    }
    return(
        <div>
        <button ref={c1}  style={{backgroundColor:'black' ,width:'100px' ,height:'100px'}} onClick={change1} ></button><br />
        <button ref={c2}  style={{backgroundColor:'blue' ,width:'100px' ,height:'100px'}} onClick={change1}></button>
        </div>
    )

}
export default Week1