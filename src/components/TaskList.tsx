import { TaskItem } from './TaskItem'

export function TaskList() {
  return (
    <section className="task-panel" aria-label="Tareas">
      <ul className="task-list">
        {/* Layout samples. Replace them with the tasks from state. */}
        <TaskItem
          title="Leer la guía de useReducer"
          subject="programacion"
          done={false}
        />
        <TaskItem
          title="Resolver ejercicios de fracciones"
          subject="matematicas"
          done
        />
      </ul>
    </section>
  )
}
