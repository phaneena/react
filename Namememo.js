import React from 'react'
const Namememo=({mark})=>{
    console.log("inside namememo");
    return(
        <div>
            <h1>Name : {mark}</h1>
        </div>
    )
}
export default React.memo(Namememo)