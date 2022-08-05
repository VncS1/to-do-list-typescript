import styles from './TasksBox.module.css'

import { ClipboardText, PlusCircle } from 'phosphor-react'
import { Task } from './Task';
import { useState } from 'react';
import { FormEvent, ChangeEvent, InvalidEvent } from 'react'

interface Task {
    id: number;
    content: string;
    isFinished: boolean;
}

export function TasksBox() {

    const [tasks, setTasks] = useState<Task[]>([])

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()

        setTasks([...tasks, {
            id: tasks.length + 1,
            content: newTaskText,
            isFinished: false,
        }]);

        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {

        event.target.setCustomValidity('')

        setNewTaskText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteTask(idToDelete: number) {

        const tasksWithoutDeleted = tasks.filter(task => {
            return task.id !== idToDelete
        })

        setTasks(tasksWithoutDeleted)
    }

    function handleTaskChecked(idToCheck: number, taskCheckedContent: string, actualStatus: boolean) {

        const tasksWithoutChecked = tasks.filter(task => {
            return task.id !== idToCheck
        })

        if(actualStatus){
            setTasks([{
                id: idToCheck,
                content: taskCheckedContent,
                isFinished: !actualStatus,
            }, ...tasksWithoutChecked])
        }else {
            setTasks([...tasksWithoutChecked, {
                id: idToCheck,
                content: taskCheckedContent,
                isFinished: !actualStatus,
            }])
        }
    }

    return (
        <div>
            <form className={styles.formBox} onSubmit={handleCreateNewTask}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    className={styles.taskInput}
                    value={newTaskText} //Pro valor voltar a ser vazio e o comentário não bugar
                    onChange={handleNewTaskChange} //Mudar o valor do newTaskText sempre que tiver mudanças no input
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <button type="submit" className={styles.createButton}>
                    Criar <PlusCircle size={18} />
                </button>
            </form>
            <div className={styles.wrapper}>
                <div className={styles.textInfos}>
                    <p className={styles.createdTasks}>Tarefas criadas <span>{tasks.length}</span></p>
                    <p className={styles.completeTasks}>Concluídas <span>0</span></p>
                </div>

                <div className={styles.tasksWrapper}>


                    <div className={styles.tasks}>
                        {!!tasks.length ? /* Transforma em booleano e ve o tamanho do array, Se tiver uma task, exibir ela, se não, exibir o texto*/
                            tasks.map(task => {
                                return (
                                    <Task
                                        key={task.id}
                                        content={task.content}
                                        taskId={task.id}
                                        isFinished={task.isFinished}
                                        onDeleteTask={deleteTask}
                                        onCheckTask={handleTaskChecked}
                                    />
                                );
                            })
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
        </div>
    );
}