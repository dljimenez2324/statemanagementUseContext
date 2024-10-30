
import { useContext } from "react";
import useAuth from "../Auth/useAuth";
import TodoContext from "./todoContext";


// notice the move of the useTodos.ts to here
const useTodos = () => useContext(TodoContext);

const Todo = () => {
    // const [todos, setTodos] = useState<Todo[]>([]);
    // now move this to the app parent component
    // const [todos,dispatch] = useReducer(todoReducer,[])

    //// now we call our todocontext
    //// now moved to useTodos.ts  custom hook
    // const {todos, dispatch} = useContext(TodoContext);
    const {todos, dispatch} = useTodos();
    // const {user} = useContext(LoginContext);
    // const {user} = useContext(AuthContext);
    const {user} = useAuth();

    const generateRandomNumber = ():number => {
        // return Math.floor(Math.random() * 1000)
        return Date.now();
    }

    // Add new todo
  const addTodo = () => {
   dispatch({type:'ADD', todo: {id:generateRandomNumber(), title:'todo' + generateRandomNumber(),}})
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
   dispatch({type:"DELETE",todoId: id})
  };

  return (
  <>
  
    <div className="container mt-5">
      <h1 className="mb-4">Todo List</h1>
      <p>user: {user}</p>
      <button className="btn btn-primary mb-3" onClick={addTodo}>
        Add Todo
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            {todo.title}
            <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  </>
  )
}
export default Todo
