import { useReducer } from 'react'
import { type Filter, type TaskAction } from '../types/TaskAction'
import { type Subject, type TaskItem } from '../types/TaskItem'

type StudyPlanState = {
  tasks: TaskItem[]
  filter: Filter
  error: string
}

const initialState: StudyPlanState = {
  tasks: [],
  filter: 'all',
  error: '',
}

const titleError = 'Escribe un título de al menos 3 caracteres.'

function isValidTitle(title: string) {
  return title.trim().length >= 3
}

function reducer(state: StudyPlanState, action: TaskAction): StudyPlanState {
  switch (action.type) {
    case 'ADD': {
      const title = action.title.trim()

      if (!isValidTitle(title)) {
        return { ...state, error: titleError }
      }

      return {...state,
        tasks: [...state.tasks,
          {
            id: crypto.randomUUID(),
            title,
            subject: action.subject,
            done: false,
          },
        ],
        error: '',
      }
    }
    case 'STATUS':
      return {...state,tasks: state.tasks.map((task) => task.id === action.id ? { ...task, done: !task.done } : task,),}
    case 'DELETE':
      return {...state, tasks: state.tasks.filter((task) => task.id !== action.id),}
    case 'FILTER':
      return { ...state, filter: action.filter }
    default:
      return state
  }
}

export function useStudyPlan() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTask = (title: string, subject: Subject) => {
    dispatch({ type: 'ADD', title, subject })
    return isValidTitle(title)
  }

  const changeTaskStatus = (id: string) => {
    dispatch({ type: 'STATUS', id })
  }

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE', id })
  }

  const changeFilter = (filter: Filter) => {
    dispatch({ type: 'FILTER', filter })
  }

  const visibleTasks = state.tasks.filter((task) => {
    if (state.filter === 'pending') return !task.done
    if (state.filter === 'done') return task.done
    return true
  })

  const summary = {
    total: state.tasks.length,
    pending: state.tasks.filter((task) => !task.done).length,
    done: state.tasks.filter((task) => task.done).length,
  }

  return {
    ...state,
    visibleTasks,
    summary,
    addTask,
    changeTaskStatus,
    deleteTask,
    changeFilter,
  }
}
