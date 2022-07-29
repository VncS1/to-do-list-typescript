import styles from './TaskForm.module.css'

import { PlusCircle } from 'phosphor-react'
 
export function TaskForm(){
    return(
        <form className={styles.formBox}>
            <input type="text" placeholder="Adicione uma nova tarefa" className={styles.taskInput}/>
            <button type="submit" className={styles.createButton}>
                Criar <PlusCircle size={18} />
            </button>
        </form>
    );
}