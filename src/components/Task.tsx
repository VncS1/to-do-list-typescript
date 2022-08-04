import styles from './Task.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    content: string;
    taskId: number;
    isFinished: boolean;
    onDeleteTask: (task: number) => void; //Pegando a função de deletar
    onCheckTask: (task: number) => void;
}

export function Task({ content, taskId, onDeleteTask, isFinished, onCheckTask }: TaskProps) {
    
    

    function handleDeleteTask(){
        onDeleteTask(taskId);
    }

    function handleCheckTask(){
        onCheckTask(taskId);

    }
    
    
    return (
        <div className={styles.task}>
            <div>
                <form>
                    <label className={styles.container}>
                        <input type="checkbox" onClick={handleCheckTask}/>
                        <span className={styles.checkmark}></span>
                    </label>
                </form>
                <p className={styles.taskText}>
                    {isFinished ?
                        <span className={styles.taskFinished}>{content}</span> 
                        :
                        <span>{content}</span>
                    }
                </p>
            </div>
            <div className={styles.trashIcon} onClick={handleDeleteTask} title="Deletar task">
                <Trash size={20} />
            </div>

        </div>
    );
}