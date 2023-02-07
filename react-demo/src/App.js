import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counter from './component/Counter'

import Passing from './Childcomponent'

function App() {

  let name = "ParentComponent"
  return (
  

    <div className='App'> 

    <Passing myName={name}/>
    
    <Counter /> 
    
    </div>
    
    
  );
}

export default App;
