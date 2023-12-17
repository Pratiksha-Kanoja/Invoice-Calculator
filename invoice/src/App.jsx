import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Invoicecalc from './Component/Invoicecalc';
import Homepage from './Component/Homepage';
import Invoicecal2 from './Component/Invoicecal2';
import TodoInput from './Todo/TodoInput';
import Todo from './Todo/Todo';
import TodoList from './Todo/TodoList';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/todo' element={<Todo/>} />
        <Route path='/todoinput' element={<TodoInput/>} />
        <Route path='/todolist' element={<TodoList/>} />
        <Route path='/invoicecalc' element={<Invoicecalc/>} />
        <Route path='/invoicecal2' element={<Invoicecal2/>} />
        <Route path='/' element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;

