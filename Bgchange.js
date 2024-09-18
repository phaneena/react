import React,{useState} from 'react'

function Bgchange(){
    const[color,setColor]=useState('yellow')
    function changeClr(){
        setColor((p)=>(p==='yellow'?'green':'yellow'))
    }
    const bg={
        backgroundColor:color,
        padding:'10px',
        margin:'20px'
    }

    return(
        <div style={bg} onClick={changeClr}>

        </div>
    )
}
export default Bgchange