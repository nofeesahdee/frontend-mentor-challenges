import Task from "./Task";

const Tasks = ({ tasks, onDelete, onStrike }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onStrike={onStrike}/>
      ))}
      
      <div className="bottom">
        <div>5 items left</div>
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
