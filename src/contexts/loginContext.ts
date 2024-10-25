import React, { Dispatch } from "react";
import { AuthAction } from "../reducers/authReducer";


interface LoginContextType {
    user: string;
    dispatch: Dispatch<AuthAction>;
}

const LoginContext = React.createContext<LoginContextType>({} as LoginContextType);

export default LoginContext;