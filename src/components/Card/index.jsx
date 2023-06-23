import "./styles.css";

export function Card({name, horario}) {
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{horario}</small>
    </div>
  )
}