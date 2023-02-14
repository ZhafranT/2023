import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Home, Login, Register, Writer, Single } from './pages';
import { Navbar, Footer } from './components';
import './style.scss';

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
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/post/:id',
            element: <Single />,
         },
         {
            path: '/writer',
            element: <Writer />,
         },
      ],
   },
   {
      path: '/login',
      element: <Login />,
   },
   {
      path: '/register',
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
