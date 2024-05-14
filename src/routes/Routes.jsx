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
        element: <MyQueries />,
      },
      {
        path:'/queries',
        element:<Queries/>
      },
      {
        path: "/add-queries",
        element: <AddQueries />,
      },
      {
        path:'/details/:id',
        element:<Details/>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/queries/${params.id}`)
      },{
        path:'/update-query/:id',
        element:<QueryUpdate/>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/queries/${params.id}`)
      }
    ],
  },
]);
