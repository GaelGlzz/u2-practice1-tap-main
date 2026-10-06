const filters = [
  { id: 'all', label: 'Todas' },
  { id: 'pending', label: 'Pendientes' },
  { id: 'done', label: 'Completadas' },
] as const

export function TaskFilters() {
  return (
    <div className="filters" role="group" aria-label="Filtrar tareas">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={filter.id === 'all' ? 'filter is-active' : 'filter'}
          data-filter={filter.id}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
