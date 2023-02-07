import React, { useState } from 'react'
import HocComponent from './HocComponent'

function SecondComponent(props) {
    // const [value, setValue] = useState(0)
    // let onHoverIncreament=()=>{
    //     setValue(value+1)
    // }
  return (
    <div>
    <h1>increace count on click :{props.value} </h1>
    <button onMouseOver={props.increament}>click</button>
    </div>
  )
}

export default HocComponent(SecondComponent,10)