export function TaskForm() {
  return (
    <form className="task-form">
      <h2>Nueva tarea</h2>
      <p className="form-help">
        El título es obligatorio y debe tener al menos 3 caracteres.
      </p>

      <label htmlFor="title">Título</label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Ej. Repasar los hooks"
        autoComplete="off"
      />

      <label htmlFor="subject">Materia</label>
      <select id="subject" name="subject" defaultValue="programacion">
        <option value="programacion">Programación</option>
        <option value="matematicas">Matemáticas</option>
        <option value="historia">Historia</option>
      </select>

      <p className="form-error" role="alert"></p>

      <button type="submit" className="submit-button">
        Agregar tarea
      </button>
    </form>
  )
}
