import styles from './AddTaskBar.module.css';
import { PlusCircle } from '@phosphor-icons/react';
import { TasksInfo } from './TasksInfo';
import { TaskEmpty } from './TaskEmpty';
import { TaskCard } from './TaskCard';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

export function AddTaskBar(){
    const [tasks, setTasks] = useState([]);

    const [newTask, setNewTask] = useState('');

    function handleCreateTask(e){
        e.preventDefault();

        const newTaskFormatted = {
            id: uuidv4(),
            description: newTask,
            isDone: false,
        }
        
        setTasks([...tasks,newTaskFormatted]);
        
        setNewTask('');
    }

    function handleNewTaskChange(e){
        setNewTask(e.target.value);
    }

    return(
            <>
                <form className={styles.container} onSubmit={handleCreateTask}>
                    <input 
                        type="text" 
                        placeholder="Adicione uma nova tarefa"
                        value={newTask}
                        onChange={handleNewTaskChange}
                    />
                    <button type='submit'>
                        Criar <PlusCircle size={16} weight="bold"/>
                    </button>
                </form>

                <TasksInfo />
                
                { 
                    tasks.length === 0 
                    ? <TaskEmpty /> 
                    : tasks.map(item=>
                        <TaskCard 
                            key={item.id}
                            description={item.description}
                            isDone={item.isDone}
                        />
                    ) 
                }
            </>
    )
}