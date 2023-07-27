import './global.css';

import { Header } from './components/Header';
import { AddTaskBar } from './components/AddTaskBar';
import { TasksInfo } from './components/TasksInfo';

export function App() {

  return (
    <>
      <Header />
      <AddTaskBar />
      <TasksInfo />
    </>
  )
}