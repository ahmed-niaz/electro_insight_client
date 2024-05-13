import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyQueries from "../pages/MyQueries";
import AddQueries from "../pages/AddQueries";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
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
        path:'/register',
        element:<Register/>
      },
      {
        path:'/my-queries',
        element:<MyQueries/>
      },{
        path:'/add-queries',
        element:<AddQueries/>
      }
    ],
  },
]);
