import { useState } from "react";
import { Todos } from "./components/Todos";

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

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos onRemoveTodo={handleRemove} todos={todos} />
    </div>
  );
};

export default App;
