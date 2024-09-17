import React from 'react';

// function Propes(props){
//     return(
//         <div>
//             <h1>Name {props.name} </h1>
//             <h1>Age {props.age} </h1>
//             <h1>Place {props.place}</h1>
//         </div>
//     )
// }
function Propes(name,age,place){
    return(
        <div>
        <h1>name:{name}</h1>
        <h1>age:{age}</h1>
        <h1>place:{place}</h1>
        </div>
    )
}
export default Propes