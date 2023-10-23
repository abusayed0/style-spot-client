import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/home/Home";
import AddProduct from "../pages/add-product/AddProduct";
import MyCart from "../pages/my-cart/MyCart";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import BrandProducts from "../pages/brand-products/BrandProducts";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                loader: () => fetch("https://style-spot-server.vercel.app/"),
                element: <Home/>
            },
            {
                path: "/:brand",
                loader: ({params}) => fetch(`https://style-spot-server.vercel.app/${params.brand}`),
                element: <BrandProducts/>
            },
            {
                path: "/add-product",
                element: <AddProduct/>
            },
            {
                path: "/my-cart",
                element: <MyCart/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    }
]);
export default router;