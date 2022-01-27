import { useState  } from "react";

const Input = () => {

  const [text, setText] = useState ('')

  return (
    <form className='details'>
        <label className='container'>
            <input type="checkbox" className='checkbox' />
            <span className='checkmark'></span>

            <input type="text" name="" id="input-box"
             placeholder="Create a new to ..." 
             value={text} onChange={(e) => setText(e.target.value)}/>
        </label>
    </form>
  )
  
};

export default Input;
