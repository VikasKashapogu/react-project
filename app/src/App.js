import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RootLayout from "./RootLayout";
import Login from "./Components/Body/Login";
import Register from "./Components/Body/Register";
import AdminLogin from "./Components/Body/AdminLogin";
import Availability from "./Components/Body/Availability";
import AdminPage from "./Components/Body/AdminPage";
import Home from "./Components/Body/Home";
import New from './Components/Body/New'
import Reservation from './Components/Body/Reservation'
import AboutUs from "./Components/Header-Footer/AboutUs";

function App() {

  let browserRouter = createBrowserRouter([
    {
      path:'',
      element:<RootLayout />,
      children:[
        {
          path:'',
          element:<Home />
        },
        {
          path:'availability',
          element:<Availability/>
        },
        {
          path:'new',
          element:<New/>
        },
        {
          path:'Login',
          element:<Login/>
        },
        {
              path:'register',
            element:<Register/>
        },
        {
          path:'aboutus',
          element:<AboutUs/>
        },
        {
          path:'aboutus/adminlogin',
          element:<AdminLogin/>
        },
        {
          path:'adminpage',
          element:<AdminPage/>
        },
        {
        path:'reservation',
        element:<Reservation/>
        }
  ]
    }
  ]);
  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App