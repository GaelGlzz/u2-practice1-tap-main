import { type TaskItem } from './TaskItem';

export type Filter = 'all' | 'pending' | 'done'

export type TaskAction =
  | { type: 'ADD'; title: string; subject: TaskItem['subject'] }
  | { type: 'STATUS'; id: string }
  | { type: 'DELETE'; id: string }
  | { type: 'FILTER'; filter: Filter }