import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Add, Books, Update, ErrorPage } from './pages';
import './style.css';

const App = () => {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <Books />,
         errorElement: <ErrorPage />,
      },
      {
         path: '/add',
         element: <Add />,
         errorElement: <ErrorPage />,
      },
      {
         path: '/update/:id',
         element: <Update />,
         errorElement: <ErrorPage />,
      },
   ]);

   return (
      <div className="App">
         <RouterProvider router={router} />
      </div>
   );
};

export default App;
