import iconClose from './images/icon-cross.svg'

const Task = ({ task, onDelete, onStrike}) => {

  return (
    <form className="task">
      <label className='label-container'>
        <input type="checkbox" className='checkbox' />
        <span className='checkmark' onClick={onStrike}></span>
      </label>
      
      <p>{task.text} <img src={iconClose} alt="icon-close" onClick={() => onDelete(task.id)}/></p>
    </form>
  )
};

export default Task;
