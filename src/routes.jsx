
import Index from "./Pages/Index/Index"
import Login from "./Pages/Login/Login"
import Product from "./Pages/Product/Product"
import Products from "./Pages/Products/Products"
import Cart from "./Pages/Cart/Cart"
const routes = [
    { path: "/", element: <Index /> },
    { path: "/product/:productId", element: <Product /> },
    { path: "/products", element: <Products /> },
    { path: "/my-account", element: <Login /> },
    { path: "/cart", element: <Cart /> },
]
export default routes