import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export function Task(){
    return(
        <div className={styles.task}>
            <form>
                <input type="checkbox" className={styles.taskDone}/>
            </form>
            <p className={styles.taskText}>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <Trash size={20} />
        </div>
    );
}