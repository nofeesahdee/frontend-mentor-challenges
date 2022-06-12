import { useRef } from "react"
import useFetch from "../useFetch";
import iconClose from "./images/icon-cross.svg"

const Tasks = () => {
  const { tasks, setTasks, deleteTask } = useFetch()

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (position) => {
    dragItem.current = position;
  };
  const dragEnter = (position) => {
    dragOverItem.current = position;
  };
  const drop = () => {
    const copyTaskItems = {...tasks};
    const dragTaskContent = copyTaskItems[dragItem.current];
    copyTaskItems.splice(dragItem.current, 1);
    copyTaskItems.splice(dragOverItem.current, 0, dragTaskContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setTasks(copyTaskItems);
  };

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <form className="task"
          key={index}   	
          onDragOver={(e) => e.preventDefault()}
          onDragStart={(e) => dragStart(e, index)}
          onDragEnter={(e) => dragEnter(e, index)}
          onDragEnter={drop}
          draggable
        >
          <label className='label-container'>
            <input type="checkbox" className='checkbox' />
            <span className='checkmark'></span>
          </label>
        
          <p>{task.text} <img src={iconClose} alt="icon-close" onClick={() => deleteTask(task.id)}/></p>
        </form>
      ))}
      
      <div className="bottom">
        <div>{tasks.length} items left</div>
        <div className="links">
          <a href="/">All</a>
          <a href="/">Active</a>
          <a href="/">Completes</a>
        </div>
        <div>Clear Completed</div>
      </div>
    </div>
  )
};

export default Tasks;
