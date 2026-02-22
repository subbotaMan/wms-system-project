import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./components/Layout.jsx";
import {About} from "./pages/About.jsx";
import {Products} from "./pages/Products.jsx";
import {Contacts} from "./pages/Contacts.jsx";
import {Blog} from "./pages/Blog.jsx";
import {Tariffs} from "./components/Tariffs.js";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/contacts",
                element: <Contacts />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/tariffs",
                element: <Tariffs />
            }
        ]
    }
])