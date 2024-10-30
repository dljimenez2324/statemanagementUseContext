import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";



// imported from authReducer.ts
interface LoginAction {
  type:'LOGIN';
  username:string;
}

interface LogoutAction {
  type:'LOGOUT';
}

export type AuthAction = LoginAction | LogoutAction;


const authReducer = (state:string,action:AuthAction): string => {
  if(action.type === 'LOGIN') return action.username;
  if(action.type === 'LOGOUT') return '';
  return state;
}


// interface
interface Props {
    children: ReactNode;
}


// we need to create this provider and move our auth to this
const AuthProvider = ({children}:Props) => {

    const [user, dispatch] = useReducer(authReducer, ""); // notice that user is of type string
    
  return (
    <AuthContext.Provider value={{user, dispatch}}>

        {children}


    </AuthContext.Provider>
  )
}

export default AuthProvider