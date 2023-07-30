import styles from './TaskCard.module.css';
import { Trash } from '@phosphor-icons/react';

export function TaskCard({id, description, isDone, onDeleteTask}){

    function handleDeleteTask(){
        onDeleteTask(id);
    }

    return(
        <div className={styles.card}>
            <input type="checkbox" id='check-item' defaultChecked={isDone}/>
            <label htmlFor='check-item'>{description}</label>
            <button onClick={handleDeleteTask}>
                <Trash size={20} weight={'bold'} className={styles.delete}/>
            </button>
        </div>
    )
}