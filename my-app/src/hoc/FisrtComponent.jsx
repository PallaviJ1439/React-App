import React from 'react'
import { useState } from 'react'
import HocComponent from './HocComponent'

function FisrtComponent(props) {
    // const [value, setValue] = useState(0)
    // let onclickIncreament=()=>{
    //     setValue(value+1)
    
  return (
    <div>
    <h1>increace count on click :{props.value} </h1>
    <button onClick={props.increament}>click</button>
    </div>
  )
}

export default HocComponent(FisrtComponent,1)