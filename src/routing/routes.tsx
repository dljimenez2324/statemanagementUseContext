import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetails from "./UserDetails";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

// createBrowserRouter will want a routeObject array so we add []
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children: [
          { path: "", element: <HomePage /> },
          { path: "login", element: <LoginPage/>},
        ],
    },
    
    //   now we will add our private route
    {
        element: <PrivateRoutes/>,
        children: [
            {
              path: "users",
              element: <UsersPage />,
              children: [{ path: ":id", element: <UserDetails /> }],
            },

        ]
    }
    
]);

export default router;