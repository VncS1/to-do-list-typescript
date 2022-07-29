import { Header } from "./components/Header";


import styles from './App.module.css'
import './global.css'
import { TaskForm } from "./components/TaskForm";
import { TaskBox } from "./components/TaskBox";

export function App() {

  return (
    <div> 
      <Header />
      <TaskForm />
      <TaskBox />
    </div>
  )
}

