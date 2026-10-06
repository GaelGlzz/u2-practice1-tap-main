import { type TaskItem as Task } from '../types/TaskItem'
import { TaskItem } from './TaskItem'

type TaskListProps = {
  tasks: Task[]
  onToggleTask: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  return (
    <section className="task-panel" aria-label="Tareas">
      {tasks.length === 0 ? (
        <p className="empty-state">No hay tareas para este filtro.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              {...task}
              onToggle={() => onToggleTask(task.id)}
              onDelete={() => onDeleteTask(task.id)}
            />
          ))}
        </ul>
      )}
    </section>
  )
}
