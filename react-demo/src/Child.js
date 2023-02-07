import React from "react";


function Child(props) {
  
    let data = "hello parent";

    let sendData = () => {
        props.getChildData(data);
    };
    return (
        <div><h1> I am child </h1>
        <button onClick={sendData}>Send data to parent</button></div>
    );
    
}
export default Child