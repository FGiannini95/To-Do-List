import { FILTERS_BUTTONS } from "../const"
import { Filtervalue } from "../types"

interface Props {
  //no dínamico
  //filterSelected: 'all' | 'active' | 'completed'
  filterSelected: Filtervalue
  onFilterChange: (filter: Filtervalue) => void
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange
}) => {
  return(
   <ul className="filters">
    {/* Transformo en objeto */}
    {
      Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''

        return(
          <li key={key}>
            <a 
              href={href}
              className={className}
              onClick={(event)=>{
                event.preventDefault()
                onFilterChange(key as Filtervalue)
              }}
              >
              {literal}
              </a>
          </li>
        )
      })
    }
   </ul>
  )
}