import { Filtervalue } from "../types"
import { Filters } from "./Filters"

interface Props {
  activeCount: number,
  completedCount: number,
  filterSelected: Filtervalue,
  onClearCompleted: () => void
  handleFilterChange: (filter: any) => void;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted
}) => {

  return(
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} </strong> Tareas pendientes
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={()=>{}}
      />
      {
        completedCount > 0 && (
          <button 
            className="clear-completed"
            onClick={onClearCompleted}
          >
            Borrar completados
          </button>
        )
      }
    </footer>
  )
}