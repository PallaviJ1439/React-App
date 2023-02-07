  import React, { Component } from 'react'

class Counter extends Component {


  constructor(props) {
    super(props)
  
    this.data = {
       count: 0
    }
  }

  inc(){
    this.setdata({
      count: this.data.count + 1
    }, () => {

      console.log('Callback value', this.data.count)
    })
    console.log(this.data.count)
  }

  decrement(){
    this.setdata({
      count: this.data.count - 1 
      // first>0 ? setfirst(--first):setfirst(first=0)
      // this.state.count>0? this.setState({count:--this.state.count}):this.setState({count:0}) 

    }, () => {

      console.log('Callback value', this.data.count)
    })
    console.log(this.data.count)
  }

  render() {
    return (
      <div>
      <div>Count : {this.data.count}</div>
      <button onClick={() => this.inc()}>Inc</button>
      <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default Counter