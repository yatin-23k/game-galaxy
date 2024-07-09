import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Homepage /> },
          { path: "games/:slug", element: <GameDetailPage /> },
          { path: "login", element: <LoginPage /> },
          { path: "register", element: <RegisterPage /> },
        ],
    },
]);

export default router;