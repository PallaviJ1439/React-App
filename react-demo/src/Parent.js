import React,{useState} from 'react'
import Child from './Child'

function Parent(){
    const [data, setdata] = useState("hello world")
    let getChildData=(childdata)=>{
            setdata(childdata)
    }
    return (
    <div>
        <h1>{data}</h1>
        <Child getChildData={getChildData} /> 
    </div>);
}

export default Parent