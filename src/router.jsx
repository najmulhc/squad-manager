import { createBrowserRouter } from "react-router-dom";
import AddPlayer from "./pages/AddPlayer";
import UpdatePlayer from "./pages/UpdatePlayer";
import Home from "./pages/Home";
import DeleteConfirmation from "./pages/DeleteConfirmation";

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
  {
    path: "/confirm-delete", 
    element: <DeleteConfirmation/>
  }
]);

export default router;
