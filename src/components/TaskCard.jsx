import styles from './TaskCard.module.css';
import { Trash } from '@phosphor-icons/react';

export function TaskCard({description, isDone}){
    return(
        <div className={styles.card}>
            <input type="checkbox" id='check-item'/>
            <label htmlFor='check-item'>{description}</label>
            <Trash size={20} weight={'bold'} className={styles.delete}/>
        </div>
    )
}