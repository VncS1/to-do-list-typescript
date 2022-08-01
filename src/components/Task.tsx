import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

export function Task() {
    return (
        <div className={styles.task}>
            <form>
                <label className={styles.container}>
                    <input type="checkbox" />
                    <span className={styles.checkmark}></span>
                </label>
            </form>
            <p className={styles.taskText}>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>
            <Trash size={20} className={styles.trashIcon} />
        </div>
    );
}