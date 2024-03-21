export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const //sólo lectura

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]:{
    literal: 'Todo',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]:{
    literal: 'Activos',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]:{
    literal: 'Completados',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const

//primer const a nivel de variable de JS
//segunda const a nivel de TS que no es modiifcable y no se puede reasignar