import { useState  } from "react";

const Input = ({ onAdd }) => {
  const [text, setText] = useState ('')

  const onClick = (e) =>{
    e.preventDefault()

    if(!text){
      alert('Please enter a task')
      return
    }

    onAdd({ text })

    setText('')
  }

  return (
    <form className='details' onDoubleClick={onClick}>
        <label className='label-container'>
            <input type="checkbox" className='checkbox' />
            <span className='checkmark'></span>

            <input type="text" name="" id="input-box"
             placeholder="Create a new todo ..." 
          value={text} onChange={(e) => setText(e.target.value)}/>
        </label>
    </form>
  )
  
};

export default Input;
