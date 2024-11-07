import { isRouteErrorResponse, useRouteError } from "react-router-dom";


const ErrorPage = () => {

  const error = useRouteError();
  console.log(error);


  return (
  <>
    <h1>Yo!! You got an error  This Page Does not Exist!!!</h1>
    <p>My sincere apologies, an error has occurred.</p>
    { isRouteErrorResponse(error)? <p>Invalid page</p> : <p>Unexpected Error</p>}
  </>
  )
}

export default ErrorPage