import styles from './AddTaskBar.module.css';
import { PlusCircle } from '@phosphor-icons/react';
import { TasksInfo } from './TasksInfo';
import { TaskEmpty } from './TaskEmpty';
import { TaskCard } from './TaskCard';

export function AddTaskBar(){
    const tasks = [
        {
            id: 1,
            description: 'Velit blanditiis sequi minima quis minus',
            isDone: false,
        },
        {
            id: 2,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, blanditiis sequi minima quis minus odio nobis maxime error quibusdam laudantium dolorem similique officia',
            isDone: true,
        },
        {
            id: 3,
            description: 'Adipisicing elit minima dolorem',
            isDone: true,
        },
    ]

    return(
            <>
                <form className={styles.container}>
                    <input 
                        type="text" 
                        placeholder="Adicione uma nova tarefa"
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