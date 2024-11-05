import { useParams } from "react-router-dom"

const DetailsPage = () => {

  // with this hook we can extract params values from the URL
  const params = useParams();

  console.log(params);

  return (
 <>
    <p>User</p>
 </>
  )
}

export default DetailsPage