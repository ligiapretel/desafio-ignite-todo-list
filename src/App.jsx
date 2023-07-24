import './global.css';

import { Header } from './components/Header';
import { AddTaskBar } from './components/AddTaskBar';
import { Tasks } from './components/Tasks';

export function App() {

  return (
    <>
      <Header />
      <AddTaskBar />
      <Tasks />
    </>
  )
}