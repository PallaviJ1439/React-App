import React, { useState } from 'react'

function HocComponent(Component,val) {

    let NewComponent=()=>{
        const [value, setValue] = useState(0)
        let increment=()=>{
            setValue(value+val)
        }
        return<Component increament={increment} value={value}/>
    }


  return NewComponent
}

export default HocComponent