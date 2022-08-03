import { Header } from "./components/Header";


import styles from './App.module.css'
import './global.css'
import { TasksBox } from "./components/TasksBox";

export function App() {

  return (
    <div className={styles.wrapper}> 
      <Header />
      <TasksBox />
    </div>
  )
}

