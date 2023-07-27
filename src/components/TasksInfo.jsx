import styles from './TasksInfo.module.css';
import { TaskEmpty } from './TaskEmpty';
import { TaskCard } from './TaskCard';

export function TasksInfo(){
    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.created}>
                    <span className={styles.blue}>Tarefas criadas</span>
                    <span className={styles.counter}>0</span>
                </div>
                <div className={styles.done}>
                    <span className={styles.purple}>Concluídas</span>
                    <span className={styles.counter}>0</span>
                </div>
            </div>
            {/* <TaskEmpty /> */}
            <TaskCard />
        </div>
    )
}