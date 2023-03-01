import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home, Login, Register, Single, Write } from "./pages";
import "./style.scss";

const Layout = () => {
   return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/post/:id",
            element: <Single />,
         },
         {
            path: "/write",
            element: <Write />,
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

function App() {
   return (
      <div className="app">
         <div className="container">
            <RouterProvider router={router} />
         </div>
      </div>
   );
}

export default App;

