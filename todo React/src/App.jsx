import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";


function App() {

  const todoItems = [{
    name : 'Buy Milk',
    dueDate : '4/10/2023'
  },{
    name : "Go to College",
    dueDate : "4/10/2023"
  },{
    name : "like this video",
    dueDate : "right now"
  }]

  return <center className="todo-container">
    <AppName />
    <AddTodo />
    <TodoItems todoItems = {todoItems}></TodoItems>
       
    
    </center>
}

export default App
