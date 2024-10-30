import { useContext } from "react"
import Login from "../state-management/Auth/Login";
import TodoContext from "../state-management/Todos/todoContext";
import useCounterStore from "../state-management/Counter/store";


const MyNavbar = () => {

  // now we can call useContext here too
  const{todos} = useContext(TodoContext);
  // const { max } = useCounterStore();
  const counter = useCounterStore(s => s.counter);

  console.log("Navebar rendered");

  return (
   <>
    {/* now we can use our todos and dispatch*/}
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled" aria-disabled="true"><span>{todos.length}</span></a> */}
          <a className="nav-link disabled" aria-disabled="true"><span>{counter} </span></a>
        </li>
      </ul>
    </div>
  </div>
  <div>
    <div className="row">
      <div className="col">
      </div>
        <Login/>
    </div>
  </div>
</nav>
   </>
  )
}

export default MyNavbar