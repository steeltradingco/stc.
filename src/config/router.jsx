import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from '../views/MainPage';
import ProductDetail from '../views/Product-detail';

const router = createBrowserRouter([
    {
        path: "*",
        element: <>404 not found!</>
    },
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/product-detail/:productName",
        element: <ProductDetail />
    },
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default Router;
