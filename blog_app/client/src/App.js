import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ErrorPage, Footer, Navbar } from "./components";
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
            errorElement: <ErrorPage />,
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

