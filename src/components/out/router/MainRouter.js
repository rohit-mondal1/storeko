import { createBrowserRouter } from "react-router-dom";
import Home from "../../page/Dynamic/Home/Home";
import ProAccound from "../../page/Dynamic/ProAccound/ProAccound";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import MainLayout from "../layout/MainLayout";
 
export const router = createBrowserRouter([
    {path:'/', element:<MainLayout/> , children:([
        {path:'/' , element: <Home/>},
        {path:'/home' , element: <Home/>},
        {path:'/login' , element: <Login/>},
        {path:'/signup' , element: <SignUp/>},
        {path:'/Profile-update' , element: <ProAccound/>},
        {path:'/' , element: <Home/>},
        {path:'/' , element: <Home/>},
    ])}
])