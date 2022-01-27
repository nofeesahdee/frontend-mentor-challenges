import { useState } from "react";
import Header from './components/Header'
import Input from './components/Input';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState (
    [
        {
            id: 1,
            text: 'book'
        },
        {
            id: 2,
            text: 'biro'
        },
        {
            id: 3,
            text: 'spen'
        }
    ]
)

// Delete Items
const deleteItems = (id) => {
 setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className="container">
      <Header />
      <Input />
      <Tasks tasks={tasks} onDelete={deleteItems}/>
    </div>
  );
}

export default App;
