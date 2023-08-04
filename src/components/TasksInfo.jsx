import styles from './TasksInfo.module.css';

export function TasksInfo({totalTasks, totalDoneTasks}){
    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.created}>
                    <span className={styles.blue}>Tarefas criadas</span>
                    <span className={styles.counter}>{totalTasks}</span>
                </div>
                <div className={styles.done}>
                    <span className={styles.purple}>Concluídas</span>
                    <span className={styles.counter}>{totalDoneTasks}</span>
                </div>
            </div>
        </div>
    )
}