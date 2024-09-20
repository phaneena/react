// import React, { useRef, useState} from "react";

function Simple(){
    // const[color,setColor]=useState('pink')
    // const mystyle={
    //     backgroundColor:color,
    //     width:'10px',
    //     height:'20px'
    // }
    // const colorChange=()=>{
    //     setColor((c)=>(c==='pink' ?'blue':'pink'))
    // }
    // return(
    //     <div style={mystyle} onClick={colorChange}>

    //     </div>
    // )


   
    // const[color,setColor]=useState('pink')
    // function changeclr(){
    //         setColor((p)=>p==='pink'?'green':'pink')
    // }
    // return(
    //     <div style={{backgroundColor:color ,width:'50px',height:'50px'}} onClick={changeclr}>


    //     </div>
    // )
    // const click1=useRef(null)
    // const click2=useRef(null)
    // const click3=useRef(null)
    // const firstchange=()=>{
    //     click1.current.focus();
    //     click1.current.style.background='red';
    //     click2.current.style.background='';
    //     click3.current.style.background=''
    // }
    // const secondchange=()=>{
    //     click1.current.focus();
    //     click1.current.style.background='';
    //     click2.current.style.background='blue';
    //     click3.current.style.background=''
    // }
    // const thirdchange=()=>{
    //     click1.current.focus();
    //     click1.current.style.background='';
    //     click2.current.style.background='';
    //     click3.current.style.background='yellow'
    // }

    // return(
    //     <div>
    //     <input type="text" ref={click1} />
    //     <button onClick={firstchange} style={{background:'red'}}></button>
    //     <input type="text" ref={click2} />
    //     <button onClick={secondchange} style={{background:'blue'}}></button>
    //     <input type="text" ref={click3} />
    //     <button onClick={thirdchange} style={{background:'yellow'}}></button>
    //     </div>
    // )
    
    // const c=useRef(null)
    // return(
    //     <div onClick={change} ref={c}
    // )
    // const [name,setName]=useState([])
    // const [text,setText]=useState('')
    // const change=(e)=>{
    //     setText(e.target.value);
    // }
    // const textchange=()=>{
    //     setName((s)=>[...s,name]);
    // }
    // return(
    //     <div>
    //     <input type="text" onChange={change} />
    //     <button onClick={textchange}></button>
    //     <ul>
    //         {name.map((text)=><li>{text}</li>)}
    //     </ul>
    //     </div>

    // )



    // const[text,setText]=useState();
    // const[list,setList]=useState([]);
    // const change=(e)=>{
    //     setText(e.target.value);
    // }
    // const newlist=()=>{
    //     setList((s)=>[...s,text]);
    //     setText('')
    // }
    // const deletes=(index)=>{
    //     const update=list.filter((_,i)=>i!==index);
    //     setList(update);
    // }
    // return(
    //     <div>
    //         <input type="text" value={text} onChange={change} />
    //         <button onClick={newlist}>add</button>
    //             {list.map((val,index)=>(
    //                 <div key='index' >
    //                     <li>{val}</li>
    //                     <button onClick={()=>deletes(index)}>delete</button>
    //                     </div>
    //                     )
    //                     )}
                    
    //     </div>
    // )



    // const s=useRef(null);

    // const change=()=>{
    // if(s.current===3)
    //         s.current.style.background='blue'?'green':'blue';
    // }
    // return(
    //     <div onClick={change} style={{background:'blue' ,width:'20px',height:'30px'}} ref={s}></div>
    // )
    // const[task,setTask]=useState()
    // const imgchange=()=>{
    //     setTask((s)=>(s==='/Screenshot (2).png'?'/Screenshot (3).png':'/Screenshot (2).png'))
    // }
    // return(
    //     <div>
    //         <img src={task} alt="screenshot" style={{width:'150px' ,height:'150px'}}></img>
    //         <button onClick={imgchange}></button>
    //     </div>
    // )

    // const images=[
    //     '/Screenshot (2).png' ,
    //     '/Screenshot (3).png',
    //     '/logo192.png'
    // ]
    // const[task,setTask]=useState(0)
    // const click1=()=>{
    //     console.log(task)
    //    if(task>images.length-1)
    //         setTask(0)
    //     else
    //         setTask((s)=>s+1)
    // }
    // return(
    //     <div>
    //     <img src={images[task]} style={{height:'200px' ,width:'200px'}} alt="screenshot"></img>
    //     <button onClick={click1}>add</button>
    //     </div>
    // )

    // const [color,setColor]=useState()
    // const clr=['pink',
    //     'green',
    //     'blue',
    //     'black'
    // ]
    // const change=()=>{
    //     setColor()
        
    // }
    // return(
    //     <div style={{backgroundColor:{clr[color]}}} onClick={change}>

    //     </div>
    // )

}
export default Simple