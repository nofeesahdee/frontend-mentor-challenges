import iconClose from './images/icon-cross.svg'
import iconMoon from './images/icon-moon.svg'

const Task = ({ task, onDelete}) => {
  return (
    <div className="task">
        <form>
          <label htmlFor="checkbox" className='container'>
          <input type="checkbox" id="checkbox" className='checkbox' />
          <span className='checkmark'></span>
          </label>
          <p>{task.text} <img src={iconClose} alt="icon-close" onClick={onDelete} /></p> 
        </form>
    </div>
  )
};

export default Task;
