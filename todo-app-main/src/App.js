import { useState } from "react";
import Header from './components/Header'
import Input from './components/Input';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTask] = useState (
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
  return (
    <div className="container">
      <Header />
      <Input />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
