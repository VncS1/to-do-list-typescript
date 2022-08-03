import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    content: string;
}

export function Task({ content }: TaskProps) {
    return (
        <div className={styles.task}>
            <div>
                <form>
                    <label className={styles.container}>
                        <input type="checkbox" />
                        <span className={styles.checkmark}></span>
                    </label>
                </form>
                <p className={styles.taskText}>
                    {content}
                </p>
            </div>
            <div className={styles.trashIcon} >
                <Trash size={20} />
            </div>

        </div>
    );
}