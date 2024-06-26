import { type ListOfTodos } from "../types.d";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos
  onRemoveTodo: (id: string) => void 
  onToggleCompleteTodo: (id:string, completed:boolean) => void
}

//Tipar un Functional components
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li 
          key={todo.id}
          className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleteTodo={onToggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  );
};

