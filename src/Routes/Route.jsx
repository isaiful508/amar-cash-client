import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  
} from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Register></Register>,
    },

  ]);
  export default router;