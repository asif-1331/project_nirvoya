import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
  {
    path: "/shop/:category",
    element: <Shop/>,
  },
  // {
  //   path: "/product",
  //   element: <Product/>,
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
