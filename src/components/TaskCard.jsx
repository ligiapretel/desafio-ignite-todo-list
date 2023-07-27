import styles from './TaskCard.module.css';
import { Trash } from '@phosphor-icons/react';

export function TaskCard(){
    return(
        <>
        <div className={styles.card}>
            <input type="checkbox" id='check-item'/>
            <label for='check-item'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quasi aperiam nihil aliquam esse architecto quos a voluptates molestiae minima.</label>
            <Trash size={24} className={styles.delete}/>
        </div>
        </>
    )
}