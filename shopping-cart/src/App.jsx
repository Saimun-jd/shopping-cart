import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from './components/shop/Main'
import ShoppingCart from './components/cart/ShoppingCart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
  },
  {
    path: "cart",
    element: <ShoppingCart/>
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
