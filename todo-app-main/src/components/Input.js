import { useState } from "react";

const Input = ({ onAdd }) => {
  const [text, setText] = useState ('')

  const inputDetails = (e) =>{
    e.preventDefault()
    // if(!text){
    //   alert('Please enter a task')
    //   return
    // }
    onAdd({ text })
    setText('')
  }

  return (
    <form className='details' onKeyDown={inputDetails}>
        <label className='label-container'>
          <input type="checkbox" className='checkbox' />
          <span className='checkmark'></span>

          <input type="text" id="input-box"
          placeholder="Create a new todo ..." 
          value={text} onChange={(e) => setText(e.target.value)}/>
        </label>
    </form>
  )
  
};

export default Input;
