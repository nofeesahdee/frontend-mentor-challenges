import { useState, useEffect } from "react";
import Header from './components/Header'
import Input from './components/Input';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState ([
        {
            id: 1,
            text: 'Jog around the park 3x'
        },
        {
            id: 2,
            text: '10 minutes medication'
        },
        {
            id: 3,
            text: 'Read for 1 hr'
        },
        {
          id: 4,
          text: 'Pick up groceries'
      },
      {
          id: 5,
          text: 'Complete Todo App on frontend mentor'
      }
  ])
// Add Items
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1;
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Items
const deleteItems = (id) => {
 setTasks(tasks.filter((task) => task.id !== 
 id))
}

  return (
    <div className="container">
      <Header />
      <Input onAdd={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteItems}/>
    </div>
  );
}

export default App;
