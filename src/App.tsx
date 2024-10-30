
import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavbar";
import AuthProvider from "./state-management/Auth/AuthProvider";
import Counter from "./state-management/Counter/Counter";
import TodoProvider from "./state-management/Todos/TodoProvider";

const App = () => {
  // moved from Todo.tsx
  // const [todos, todosDispatch] = useReducer(todoReducer, []); // notice that todos is of type array
  //// now moved to AuthProvider
  // const [user, userDispatch] = useReducer(authReducer, ""); // notice that user is of type string

  return (
    <>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Login/> */}
      <AuthProvider>
        <TodoProvider>

          <Counter/>
          <MyNavbar />
          <HomePage />
        
        </TodoProvider>
      </AuthProvider>
      
    </>
  );
};

export default App;
