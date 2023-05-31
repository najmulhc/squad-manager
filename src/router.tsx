import { createBrowserRouter } from "react-router-dom";
import AddPlayer from "./pages/AddPlayer";
import UpdatePlayer from "./pages/UpdatePlayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
