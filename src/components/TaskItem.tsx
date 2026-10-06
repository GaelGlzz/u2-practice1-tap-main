const subjects = {
  programacion: 'Programación',
  matematicas: 'Matemáticas',
  historia: 'Historia',
} as const

type SubjectId = keyof typeof subjects

type TaskItemProps = {
  title: string
  subject: SubjectId
  done: boolean
}

export function TaskItem({ title, subject, done }: TaskItemProps) {
  return (
    <li className={done ? 'task is-done' : 'task'}>
      <label className="task-check">
        <input type="checkbox" defaultChecked={done} />
        <span>{title}</span>
      </label>
      <span className={`badge badge-${subject}`}>{subjects[subject]}</span>
      <button type="button" className="delete-button">
        Eliminar
      </button>
    </li>
  )
}
