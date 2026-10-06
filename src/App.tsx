import { Header } from './components/Header'
import { TaskFilters } from './components/TaskFilters'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { TaskSummary } from './components/TaskSummary'

export default function App() {
  return (
    <main className="app">
      <Header />
      <section className="layout">
        <TaskForm />
        <section className="board">
          <TaskSummary />
          <TaskFilters />
          <TaskList />
        </section>
      </section>
    </main>
  )
}
