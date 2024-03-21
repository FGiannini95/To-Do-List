import { Filtervalue } from "../types"
import { Filters } from "./Filters"

interface Props {
  activeCount: number,
  completedCount: number,
  filterSelected: Filtervalue,
  onClearCompelted: () => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  //completedCount = 0,
  filterSelected,
  //onClearCompelted
}) => {
  return(
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} </strong>
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={()=>{}}
      />
    </footer>
  )
}