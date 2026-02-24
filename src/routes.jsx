import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./components/Layout.jsx";
import {About} from "./pages/About.jsx";
import {Products} from "./pages/Products.jsx";
import {Contacts} from "./pages/Contacts.jsx";
import {Blog} from "./pages/Blog.jsx";
import {Tariffs} from "./components/Tariffs.jsx";
import {Guide} from "./pages/Guide.jsx";
import {KnowledgeBase} from "./pages/KnowledgeBase.jsx";
import {UserAgreement} from "./pages/UserAgreement.jsx";
import {PublicOffer} from "./pages/PublicOffer.jsx";
import {PrivacyPolicy} from "./pages/PrivacyPolicy.jsx";

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
            },
            {
                path: "/guide",
                element: <Guide/>
            },
            {
                path: "/knowledge",
                element: <KnowledgeBase/>
            },
            {
                path: "/user-agreement",
                element: <UserAgreement/>
            },
            {
                path: "/public-offer",
                element: <PublicOffer/>,
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy/>
            }
        ]
    }
])