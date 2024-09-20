import React, { useState } from "react";

function Color(){
    const[color,setColor]=useState('pink')
    const[color1,setColor1]=useState('pink')
    const[color2,setColor2]=useState('pink')
    const mystyle={
        backgroundColor:color,
        width:'200px',
        height:'200px'
    }
    const mystyle1={
        backgroundColor:color1,
        width:'200px',
        height:'200px'
    }
    const mystyle2={
        backgroundColor:color2,
        width:'200px',
        height:'200px'
    }
    const click1=()=>{
        setColor((p)=>p==='pink'?'green':'pink')
        setColor1('pink')
        setColor2('pink')
    }
    const click2=()=>{
        setColor('pink')
        setColor1((p)=>p==='pink'?'green':'pink')
        setColor2('pink')
    }
    const click3=()=>{
        setColor('pink')
        setColor1('pink')
        setColor2((p)=>p==='pink'?'green':'pink')
    }
    return(
        <div>
        <div onClick={click1} style={mystyle}></div><br />
        <div onClick={click2} style={mystyle1}></div><br />
        <div onClick={click3} style={mystyle2}></div>
        </div>
    )
}

export default Color