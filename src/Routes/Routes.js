import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllBooks from "../Pages/Home/AllBooks/AllBooks";
import Home from "../Pages/Home/Home/Home";
import ErrorElement from "../Pages/Shared/ErrorElement/ErrorElement";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <ErrorElement></ErrorElement>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
           
            {
                path : '/category/:id',
                element : <AllBooks></AllBooks>
            }
        ]
    }
])