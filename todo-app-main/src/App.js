import { useState, useEffect} from "react";
import Header from './components/Header'
import Input from './components/Input';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState ([])

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  }, [])

// Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    
    console.log(data)
    return data
  
  }

// Add Items
const addTask = async (task) => {
  const res = await fetch(`http://localhost:5000/tasks`,{
    method: 'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()

  setTasks([...tasks, data])
  // const id = Math.floor(Math.random() * 1000) + 1;
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])
}

// Delete Items
const deleteItems = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE'
  })

 setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      <Input onAdd={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteItems}/>
      <p className="para">Drag and drop to reorder list</p>
    </div>
  );
}

export default App;

