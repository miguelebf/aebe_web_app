import { lazy } from 'react';

// project import
import GuestGuard from 'utils/route-guard/GuestGuard';
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';

// render - login
const Error404 = Loadable(lazy(() => import('pages/maintenance/404')));

// ==============================|| AUTH ROUTING ||============================== //

const ErrorRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <GuestGuard>
          <CommonLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: '*',
          element: <Error404 />
        }
      ]
    }
  ]
};

export default ErrorRoutes;
