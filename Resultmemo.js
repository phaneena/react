import React from "react";
const Resultmemo=({result})=>{
    console.log("inside resultmmo");
    return(
        <div>
            <h1>haneena</h1>
            
            result is {result}
        </div>
    )
}
export default React.memo(Resultmemo)