import React,{useState} from 'react';
import Keypad from './components/Keypad';
import './App.css'

const App = () => {

  let[input,setinput]=useState('')
  function handleclick(value){
    setinput(input+value)
  }

function calculate(value){
  let outputVal=eval(input)
  setinput(outputVal)
}
function handleclear(value){
  setinput('')
}
  return (
    <div className='container'>
      <h1>Calculator APP Using React</h1>
      <div className='calculator'>
        <input type="text" value={input} className='output' readOnly/>
        <Keypad handleclick={handleclick} handleclear={handleclear} calculate={calculate}/>
      </div>
      
    </div>
  );
};

export default App;