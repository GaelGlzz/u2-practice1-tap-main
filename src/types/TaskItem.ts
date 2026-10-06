export const subjects = ['programacion', 'matematicas', 'historia'] as const

export type Subject = (typeof subjects)[number]

export interface TaskItem {
  id: string
  title: string
  subject: Subject
  done: boolean
}