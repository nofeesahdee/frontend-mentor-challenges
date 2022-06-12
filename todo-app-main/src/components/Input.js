import { useState } from "react";
import useFetch from "../useFetch";

const Input = () => {
  const [text, setText] = useState ('');
  const { addTask } = useFetch();

  const inputDetails = (e) =>{
    e.preventDefault()
    if(!text){
      alert('Please enter a task')
      return
    }
    addTask({ text })
    setText('')
  }

  return (
    <form className='details' onSubmit={inputDetails}>
        <label className='label-container'>
          <input type="checkbox" className='checkbox' />
          <span className='checkmark'></span>

          <input type="text" id="input-box"
            placeholder="Create a new todo ..." 
            value={text} onChange={(e) => setText(e.target.value)}
          />
        </label>
    </form>
    
  )
  
};

export default Input;
