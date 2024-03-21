//reutilizamo el tipado
import {type Todo as TodoType } from "../types"

interface Props extends TodoType {
  onRemoveTodo: (id: string) => void 
  onToggleCompleteTodo: (id:string, completed:boolean) => void
} 

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo, onToggleCompleteTodo}) => {

  return(
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={(event)=>{onToggleCompleteTodo(id, event.target.checked)}}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={()=>{onRemoveTodo(id)}}
      />
    </div>
  )
}