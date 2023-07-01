import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {
  const {currentUser} = useContext(AuthContext);
  // if user is already logged in use below one
  // const currentUser=true;

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;







//created by me
// import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Navbar from "./components/navbar/Navbar";
// import LeftBar from "./components/leftBar/LeftBar";
// import RightBar from "./components/rightBar/RightBar";
// import Home from "./pages/home/Home"
// import Profile from "./pages/profile/Profile"
// import "./style.scss"
// function App() {
//   // if user is not logged in show the login pages
//   // otherwise redirect to home page
//   const currentUser=true;

//   const Layout = () => {
//     return (
//       <div className="theme-dark">
//         <Navbar />
//         {/* <Login/> */}
//         {/* <Register/> */}
//         <div style={{ display: "flex" }}>
//           <LeftBar />
//           <div style={{flex:6}}>
//           <Outlet />
//           </div>
//           <RightBar />

//         </div>
//       </div>
//     )
//   }

//   const ProtectedRoute = ({ children }) => {
//     if (!currentUser) {
//       return <Navigate to="/login" />;
//     }

//     return children;
//   };
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <ProtectedRoute>
//           <Layout />
//         </ProtectedRoute>
//       ),
      
//       //created by me
//       // element: (
//       //     <Layout />
//       // ),
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/profile/:id",
//           element: <Profile />,
//         },
//       ],
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/register",
//       element: <Register />,
//     },
//   ]);
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );

//   //  create by me
//   //   const router = createBrowserRouter([
//   //     {

//   //       path: "/login",
//   //       element: <Login />,
//   //     },
//   //     {
//   //       path: "/register",
//   //       element: <Register />,
//   //     },
//   //   ]);
//   //   return (
//   //     <div>
//   //       <RouterProvider router={router} />
//   //     </div>
//   //   );
// }

// export default App;
