import iconClose from './images/icon-cross.svg'

const Task = ({ task, onDelete}) => {
  return (
    <div className="task">
        <form>
          <label className='container'>
          <input type="checkbox" className='checkbox' />
          <span className='checkmark'></span>
          </label>
          <p>{task.text} <img src={iconClose} alt="icon-close" onClick={() => onDelete(task.id)} /></p>
        </form>
    </div>
  )
};

export default Task;
