//forma de tipar las props
//los tipos se pueden exportar como modulos
export interface Todo {
  id: string,
  title: string,
  completed: boolean,
}

export type ListOfTodos = Todo[]