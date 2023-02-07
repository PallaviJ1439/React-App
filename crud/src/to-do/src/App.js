import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchApi } from './actions/action';

function App() {
  let dispatch = useDispatch()
  let users= useSelector((state)=>state.users)
  console.log("users",users);

  useEffect(()=>{
    dispatch(fetchApi())
  },[])
  
  return (
    <div className="App">
     <Todo />
     <div>
      {users.map((val)=>{
        return <h2 key={val.id}>{val.name}</h2>
      })}
     </div>
    </div>
  );
}

export default App;
