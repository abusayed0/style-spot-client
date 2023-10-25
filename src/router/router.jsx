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
                path: "/details/:id",
                loader: ({params}) => fetch(`https://style-spot-server.vercel.app/details/${params.id}`),
                element: <ProductDetails/>
            },
            {
                path: "/update/:id",
                loader: ({params}) => fetch(`https://style-spot-server.vercel.app/update/${params.id}`),
                element: <UpdateProduct/>
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