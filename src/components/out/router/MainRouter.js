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
    {path:'/', element:<MainLayout/>  , children:([
        {path:'/' , element: <PrivateRoute><Home/></PrivateRoute>},
        {path:'/home' , element: <PrivateRoute><Home/></PrivateRoute>},
        
        {path:'/Profile-update' , element: <PrivateRoute><ProAccound/></PrivateRoute>},
        {path:'/myProfile' , element: <PrivateRoute><MyProfile/></PrivateRoute>},
        {path:'/albums' , element: <PrivateRoute><Albums/></PrivateRoute>},
        {path:'/api-keys' , element: <PrivateRoute><ApiKeys/> </PrivateRoute>},
        {path:'/uplde-image' , element: <PrivateRoute><UplodeImage/></PrivateRoute>},
        {path:'/updateProfile' , element: <PrivateRoute><UpdateProfile/></PrivateRoute>},
    ])},
    {path:'/login' , element: <Login/>},
        {path:'/signup' , element: <SignUp/>},
])