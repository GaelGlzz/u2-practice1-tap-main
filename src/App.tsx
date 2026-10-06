import { Header } from './components/Header'
import { TaskFilters } from './components/TaskFilters'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { TaskSummary } from './components/TaskSummary'
import { useStudyPlan } from './hooks/useStudyPlan'

export default function App() {
  const { error, filter, visibleTasks, summary, addTask, changeTaskStatus, deleteTask, changeFilter,} = useStudyPlan()

  return (
    <main className="app">
      <Header />
      <section className="layout">
        <TaskForm error={error} onAddTask={addTask} />
        <section className="board">
            <TaskSummary {...summary} />
            <TaskFilters activeFilter={filter} onChangeFilter={changeFilter} />
            <TaskList
              tasks={visibleTasks}
              onToggleTask={changeTaskStatus}
              onDeleteTask={deleteTask}
            />
        </section>
      </section>
    </main>
  )
}
