import { useState } from "react";
import { Todos } from "./components/Todos";
import { TODO_FILTERS } from "./const";
import { Filtervalue } from "./types";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

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
  const filteredTodos = todos.filter(todo =>{
    if(filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if(filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo =>!todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = (title?: string): void => {
    if (title) {
      const newTodo = {
        title,
        id: crypto.randomUUID(),
        completed: false
      };
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    }
  };


  return (
    <div className="todoapp">
      <Header
        onAddTodo={handleAddTodo}
      />
      <Todos 
        onToggleCompleteTodo={handelCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
        />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
