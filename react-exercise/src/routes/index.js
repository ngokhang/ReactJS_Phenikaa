import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ProductDetail from '../pages/ProductDetail';
import Protectedroute from '../pages/Protectedroute';
import Admin from '../pages/Admin';
import Login from '../pages/Login';
import ProtectAdminRoute from '../pages/ProtectAdminRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/homepage',
    element: (
      <Protectedroute>
        <HomePage />
      </Protectedroute>
    ),
    children: [
      {
        path: 'product',
        element: <ProductPage />,
        children: [
          {
            path: ':id',
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: 'admin',
        element: (
          <ProtectAdminRoute>
            <Admin />
          </ProtectAdminRoute>
        ),
      },
    ],
  },
]);

export default router;
