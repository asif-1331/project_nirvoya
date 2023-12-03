import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  // {
  //   path: "/product",
  //   element: <Product/>,
  // },
  // {
  //   path: "/shop/:category",
  //   element: <Shop/>,
  // },
]);

function App() {
  return (
    <>
      <Navbar/>
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App
