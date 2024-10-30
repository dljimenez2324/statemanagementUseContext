
import useAuth from './useAuth';

const Login  = () => {
  
//   const [username, setUsername] = useState<string>('Jose!');
// const  [user, dispatch] = useReducer(authReducer, '')
//// use useContext now
  // const {user, dispatch} = useContext(LoginContext);
  //// now we can do our custom hook useAuth so we no longer need to have our useContext
  // const {user, dispatch} = useContext(AuthContext);
  const {user, dispatch} = useAuth();

  // Handle login
  const handleLogin = () => {
   dispatch({type:'LOGIN', username:'Jose!'})
  }
  // Handle logout
  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
};
  

  return (
    <div className="container mt-1">
      {/* <h1 className="mb-4">User Authentication</h1> */}
      {user ? (
          <div>
            <h4>It is I, {user}!</h4>
          <button className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      ) : (
          
              <button className="btn btn-primary" onClick={handleLogin}>
              LogIn
            </button>
          
      )}
    </div>
  );
};

export default Login;