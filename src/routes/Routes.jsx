import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyQueries from "../pages/MyQueries";
import AddQueries from "../pages/AddQueries";
import ErrorPage from "../pages/ErrorPage";
import Details from "../pages/Details";
import Queries from "../pages/Queries";
import QueryUpdate from "../components/QueryUpdate";
import ProtectedRoutes from "./ProtectedRoutes";
import MyRec from "../pages/MyRec";
import RecForMe from "../pages/RecForMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/my-queries",
        element: <ProtectedRoutes>
          <MyQueries />
        </ProtectedRoutes>,
      },
      {
        path:'/queries',
        element:<Queries/>
      },
      {
        path: "/add-queries",
        element: <ProtectedRoutes>
          <AddQueries />
        </ProtectedRoutes>,
      },
      {
        path:'/details/:id',
        element: <ProtectedRoutes>
          <Details/>
        </ProtectedRoutes>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/queries/${params.id}`)
      },{
        path:'/update-query/:id',
        element:<QueryUpdate/>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/queries/${params.id}`)
      },
      {
        path:'/my-recommendation',
        element:<ProtectedRoutes>
          <MyRec/>
        </ProtectedRoutes>
        
      },
      {
        path:'/for-me',
        element:<ProtectedRoutes>
          <RecForMe/>
        </ProtectedRoutes>
      }
    ],
  },
]);
