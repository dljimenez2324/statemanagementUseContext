// we will make this to pass through our states

import { Dispatch } from "react";
import React from "react";
import { Todo, TodoAction } from "./TodoProvider";

// interface here
interface TodoContextType {
    todos: Todo[];
    dispatch: Dispatch<TodoAction>;
}

const TodoContext = React.createContext<TodoContextType>({} as TodoContextType);  // the <> states what type it is and the as TodoC...Type  is stating the type of the initial object

export default TodoContext;