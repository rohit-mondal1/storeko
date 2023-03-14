import { createBrowserRouter } from "react-router-dom";
import Albums from "../../page/Dynamic/Albums/Albums";
import ApiKeys from "../../page/Dynamic/ApiKeys/ApiKeys";
import Home from "../../page/Dynamic/Home/Home";
import MyProfile from "../../page/Dynamic/MyProfile/MyProfile";
import UpdateProfile from "../../page/Dynamic/MyProfile/UpdateProfile";
import ProAccound from "../../page/Dynamic/ProAccound/ProAccound";
import UplodeImage from "../../page/Dynamic/UplodeImage/UplodeImage";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import MainLayout from "../layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
 
export const router = createBrowserRouter([
    {path:'/', element:<PrivateRoute><MainLayout/></PrivateRoute>  , children:([
        {path:'/' , element: <Home/>},
        {path:'/home' , element: <Home/>},
        {path:'/login' , element: <Login/>},
        {path:'/signup' , element: <SignUp/>},
        {path:'/Profile-update' , element: <ProAccound/>},
        {path:'/myProfile' , element: <MyProfile/>},
        {path:'/albums' , element: <Albums/>},
        {path:'/api-keys' , element: <ApiKeys/>},
        {path:'/uplde-image' , element: <UplodeImage/>},
        {path:'/updateProfile' , element: <UpdateProfile/>},
    ])}
])