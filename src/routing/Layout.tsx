import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"



const Layout = () => {
  return (
<>
    <NavBar/>

    <div id="main"></div>
    <Outlet/>
    {/* with react router we have something called outlet  and it allows us to render child route elements if there are any */}
</>
  )
}

export default Layout   