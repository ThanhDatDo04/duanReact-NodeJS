import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientLayout from "./layouts/ClientLayout";
import ClientAntdLayout from "./layouts/ClientAntdLayout";
import { Toaster } from "react-hot-toast";
import ProductDetail from "./pages/ProductDetail";
import { Admin } from "./pages/admin/Admin";
import EditProduct from "./pages/admin/EditProduct";
import AddProduct from "./pages/admin/AddProduct";
import AllCart from "./pages/cart/AllCArt";
import Checkout from "./pages/cart/CheckOut";

function App() {
  const routeConfig = [
    {
      path: "",
      element: <ClientLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/about", element: <About /> },
        { path: "/product/:id", element: <ProductDetail /> },
        { path: "/cart", element: <AllCart /> },
        { path: "/checkout", element: <Checkout /> },
      ],
    },
    {
      path: "antd",
      element: <ClientAntdLayout />,
      children: [
        { path: "", element: <Homepage /> },
        { path: "about", element: <About /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/admin", element: <Admin /> },
    { path: "/admin/add-product", element: <AddProduct /> },
    { path: "/admin/edit-product/:id", element: <EditProduct /> },
  ];

  const routes = useRoutes(routeConfig);

  return (
    <main>
      {routes}
      <Toaster />
    </main>
  );
}

export default App;
