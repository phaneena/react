import React from "react";


// function List(){
//     const fruits=['apple','banana','orange','grapes'];
//     fruits.sort();
//     const listItems =fruits.map(fruit => <li>{fruit}</li>)
    
//     return(<ol>{listItems}</ol>)
// }
// export default List

function List(){
    const fruits=[{id:1,name:'apple', calaries:124 },
                {id:2,name:'banana',calaries:34},
                {id:3,name:'orange' ,calaries:56},
                {id:4,name:'grape',calaries:123}
    ]
    const listItems=fruits.map(fruit=><li key={fruit.id}>
                                                {fruit.name}:&nbsp;
                                                {fruit.calaries}</li>)
    return(<ul>{listItems}</ul>)
}
export default List
