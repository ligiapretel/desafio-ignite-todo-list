import styles from './Header.module.css';
import todoLogo from '../assets/logo-todo.svg';

export function Header(){

    return (
        <header className={styles.header}>
            <img src={todoLogo} alt='Logo da aplicação | Foguete'/>
            <h1>
                <span className={styles.blue}>to</span>
                <span className={styles['dark-purple']}>do</span>
            </h1>
        </header>
    )
}