import styles from './AddTaskBar.module.css';
import { PlusCircle } from '@phosphor-icons/react';

export function AddTaskBar(){

    return(
        <div className={styles.container}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>Criar <PlusCircle size={16} weight="bold"/></button>
        </div>
    )
}