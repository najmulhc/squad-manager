import { createBrowserRouter } from "react-router-dom";
import AddPlayer from "./pages/AddPlayer";
import UpdatePlayer from "./pages/UpdatePlayer";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/add-player",
    element: <AddPlayer />,
  },
  {
    path: "/update-player",
    element: <UpdatePlayer />,
  },
]);

export default router;
