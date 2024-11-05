import { Link } from "react-router-dom"


const HomePage = () => {
  return (
  <>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sunt voluptates nulla totam, id saepe beatae nobis laboriosam, corrupti, qui doloribus praesentium exercitationem. Earum at, facere voluptates odit quasi dolorem.
    </p>
    {/* <a href="/users">Users</a> */}
    <Link to={"/users"}>Users</Link>
  </>
  )
}

export default HomePage