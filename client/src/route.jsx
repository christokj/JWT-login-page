import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";  

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <div>404 Not found</div>,
    }
  ]);

  export default router;