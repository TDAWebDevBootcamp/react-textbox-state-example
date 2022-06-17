import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [first, setfirst] = useState("")
  const handleChange = (e) => {
    setfirst(e.target.value);
  }

  const dosearch = () =>{
    console.log("First",first);
  }

  //fires once at page load
  useEffect( () => {
    setfirst("Test");
  },[])

  //fires when first changes
  useEffect( () => {
   //you could put dosearch() here instead of having a button
  },[first])

  return (
    <div className="App">
     <input onChange={(e) => handleChange(e)}></input>
     <button onClick={dosearch}></button>
    </div>
  );
}

export default App;
