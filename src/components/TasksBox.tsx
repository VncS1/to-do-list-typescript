import styles from './TasksBox.module.css'

import { ClipboardText } from 'phosphor-react'
import { Task } from './Task';

const tasks = [
    {
        id: 1,
        title: 'First task',
    }
]

export function TasksBox() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textInfos}>
                <p className={styles.createdTasks}>Tarefas criadas <span>0</span></p>
                <p className={styles.completeTasks}>Concluídas <span>0</span></p>
            </div>

            <div className={styles.tasksWrapper}>


                <div className={styles.tasks}>
                    {/* fazer um if ternário
                    se tiver tasks, faço o map, se não, exibo o
                    noTasks*/}

                    {!!tasks.length ? /* Transforma em booleano e ve o tamanho do array, Se tiver uma task, exibir ela, se não, exibir o texto*/
                        <div>
                            <Task />
                            <Task />
                        </div>
                        :
                        <div className={styles.noTasks}>
                            <ClipboardText size={56} />
                            <p className={styles.textNoTasks}>
                                <span>Você ainda não tem tarefas cadastradas</span><br />
                                Crie tarefas e organize seus itens a fazer
                            </p>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}