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
                    {
                        totalTasks === 0
                        ? <span className={styles.counter}>{totalTasks}</span>
                        : <span className={styles.counter}>{totalDoneTasks} de {totalTasks}</span>
                    }
                </div>
            </div>
        </div>
    )
}