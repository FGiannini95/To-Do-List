import { useState } from "react";
import { Todos } from "./components/Todos";
import { TODO_FILTERS } from "./const";
import { Filtervalue } from "./types";
import { Footer } from "./components/Footer";

const mockTodos = [
  { id: "1", title: "Enviar CV", completed: true },
  {
    id: "2",
    title: "Avanzar en el curso de REACT",
    completed: false,
  },
  {
    id: "3",
    title: "Preparar la entrevista de trabajo",
    completed: false,
  },
];

const App = (): JSX.Element => {
  //no hace falta tiparlo ya que, por inferencia, tenemos toda la información
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<Filtervalue>(TODO_FILTERS.ALL)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handelCompleted = (id:string, completed:boolean): void => {
    const newTodos = todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  } 

  const handleFilterChange = (filter: Filtervalue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  return (
    <div className="todoapp">
      <Todos 
        onToggleCompleteTodo={handelCompleted}
        onRemoveTodo={handleRemove}
        todos={todos}
        />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={()=> {}}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
