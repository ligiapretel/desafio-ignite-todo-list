import styles from './TaskEmpty.module.css';
import clipboard from '../assets/clipboard.svg';

export function TaskEmpty(){
    return(       
        <div className={styles.empty}>
            <img src={clipboard} alt="Ícone de Clipboard" />
            <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}