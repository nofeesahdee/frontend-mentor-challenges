import Header from './components/Header'
import Input from './components/Input';
import Tasks from './components/Tasks';

function App() {

  return (
    <div className="container">
      <Header />
      <Input />
      <Tasks />
      <p className="para">Drag and drop to reorder list</p>
    </div>
  );
}

export default App; 

