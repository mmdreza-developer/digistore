
import Index from "./Pages/Index/Index"
import Login from "./Pages/Login/Login"
import Product from "./Pages/Product/Product"
import Products from "./Pages/Products/Products"
import Store from "./Pages/Store/Store"
const routes = [
    { path: "/", element: <Index /> },
    { path: "/product/:productId", element: <Product /> },
    { path: "/products", element: <Products /> },
    { path: "/auth/login", element: <Login /> },
    { path: "/store", element: <Store /> },
]
export default routes