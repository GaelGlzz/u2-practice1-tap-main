import { type Subject } from '../types/TaskItem'

const subjectLabels = {
  programacion: 'Programación',
  matematicas: 'Matemáticas',
  historia: 'Historia',
} as const

type TaskItemProps = {
  id: string
  title: string
  subject: Subject
  done: boolean
  onToggle: () => void
  onDelete: () => void
}

export function TaskItem({ title, subject, done, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className={done ? 'task is-done' : 'task'}>
      <label className="task-check">
        <input type="checkbox" checked={done} onChange={onToggle} />
        <span>{title}</span>
      </label>
      <span className={`badge badge-${subject}`}>{subjectLabels[subject]}</span>
      <button type="button" className="delete-button" onClick={onDelete}>
        Eliminar
      </button>
    </li>
  )
}
