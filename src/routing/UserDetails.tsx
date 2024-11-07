import { useLocation, useParams, useSearchParams } from "react-router-dom"

const userDetails = () => {

  // with this hook we can extract params values from the URL
  const params = useParams();

  // gives back state of params and how to set params
  const[searchParams, setSearchParams] = useSearchParams();

  // returns the current location object and also matches our routing
  const location = useLocation()

  console.log(location);

  return (
 <>
    <p> User: {params.id}</p>
 </>
  )
}

export default userDetails