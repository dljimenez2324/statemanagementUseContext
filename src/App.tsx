import { useReducer } from "react";
import HomePage from "./components/HomePage";
import MyNavbar from "./components/MyNavbar";
import todoReducer from "./reducers/TodoReducer";
import TodoContext from "./contexts/todoContext";
import authReducer from "./reducers/authReducer";
import LoginContext from "./contexts/loginContext";

const App = () => {
  // moved from Todo.tsx
  const [todos, todosDispatch] = useReducer(todoReducer, []); // notice that todos is of type array
  const [user, userDispatch] = useReducer(authReducer, ""); // notice that user is of type string

  return (
    <>
      {/* <Counter/> */}
      {/* <Todo/> */}
      {/* <Login/> */}
      <LoginContext.Provider value={{ user, dispatch: userDispatch}}>
        <TodoContext.Provider value={{ todos, dispatch: todosDispatch }}>
          <MyNavbar />
          <HomePage />
        </TodoContext.Provider>
      </LoginContext.Provider>
    </>
  );
};

export default App;
