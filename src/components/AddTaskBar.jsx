import styles from './AddTaskBar.module.css';
import { PlusCircle } from '@phosphor-icons/react';
import { TasksInfo } from './TasksInfo';
import { TaskEmpty } from './TaskEmpty';
import { TaskCard } from './TaskCard';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

export function AddTaskBar(){
    const [tasks, setTasks] = useState([]);

    const [newTask, setNewTask] = useState('');

    const [doneTasks, setDoneTasks] = useState(0);

    useEffect(()=>{
        sumDoneTasks();
    },[tasks]);

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

    function deleteTask(taskIdToDelete){
        const tasksWithoutDeletedOne = tasks.filter(item=>item.id != taskIdToDelete);

        setTasks(tasksWithoutDeletedOne);
    }

    function changeIsDone(taskId){
        const taskToUpdate = tasks.filter(item=> {
            item.id === taskId ? item.isDone = !item.isDone : null;
        })

        setTasks(tasks);
        
        sumDoneTasks();
    }
    
    function sumDoneTasks(){

        const allDoneTasks = tasks.reduce((total,item)=>{
                if(item.isDone){
                    return total + 1;
                } 
                return total;
            },0);

        setDoneTasks(allDoneTasks);        
    }

    const isInputEmpty = newTask.length === 0 || !newTask.trim();

    return(
            <>
                <form className={styles.container} onSubmit={handleCreateTask}>
                    <input 
                        type="text" 
                        placeholder="Adicione uma nova tarefa"
                        value={newTask}
                        onChange={handleNewTaskChange}
                    />
                    <button type='submit' disabled={isInputEmpty}>
                        Criar <PlusCircle size={16} weight="bold"/>
                    </button>
                </form>

                <TasksInfo 
                    totalTasks={tasks.length}
                    totalDoneTasks={doneTasks}
                />
                
                { 
                    tasks.length === 0 
                    ? <TaskEmpty /> 
                    : tasks.map(item=>
                        <TaskCard 
                            key={item.id}
                            id={item.id}
                            description={item.description}
                            isDone={item.isDone}
                            onDeleteTask={deleteTask}
                            onDoneTask={changeIsDone}
                        />
                    ) 
                }
            </>
    )
}