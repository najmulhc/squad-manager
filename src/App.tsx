import "./App.css";
import { RouterProvider } from "react-router";
import router from "./router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
