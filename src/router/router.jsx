import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/home/Home";
import AddProduct from "../pages/add-product/AddProduct";
import MyCart from "../pages/my-cart/MyCart";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import BrandProducts from "../pages/brand-products/BrandProducts";
import ProductDetails from "../pages/productDetails/ProductDetails";
import UpdateProduct from "../pages/update-product/UpdateProduct";
import AuthRequired from "../auth-required/AuthRequired";
import NotFound from "../pages/not-found/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                loader: () => fetch("https://b8a10-brandshop-server-side-abusayed0.vercel.app/"),
                element: <Home/>
            },
            {
                path: "/:brand",
                loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-abusayed0.vercel.app/${params.brand}`),
                element: <BrandProducts/>
            },
            {
                path: "/details/:id",
                loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-abusayed0.vercel.app/details/${params.id}`),
                element: <AuthRequired><ProductDetails/></AuthRequired>
            },
            {
                path: "/update/:id",
                loader: ({params}) => fetch(`https://b8a10-brandshop-server-side-abusayed0.vercel.app/update/${params.id}`),
                element: <AuthRequired><UpdateProduct/></AuthRequired>
            },
            {
                path: "/add-product",
                element: <AuthRequired><AddProduct/></AuthRequired>
            },
            {
                path: "/my-cart",
                element: <AuthRequired><MyCart/></AuthRequired>
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