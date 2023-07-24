import styles from './Tasks.module.css';
import clipboard from '../assets/clipboard.svg';

export function Tasks(){
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
            <div className={styles.empty}>
                <img src={clipboard} alt="Ícone de Clipboard" />
                <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}