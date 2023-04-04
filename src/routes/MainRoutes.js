import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
import AuthGuard from 'utils/route-guard/AuthGuard';

const CheckMail = Loadable(lazy(() => import('pages/auth/check-mail')));
const ClimaPage = Loadable(lazy(() => import('pages/clima')));
const DataPage = Loadable(lazy(() => import('pages/data')));
const ProduccionPage = Loadable(lazy(() => import('pages/produccion')));
const RepositorioPage = Loadable(lazy(() => import('pages/repositorio')));
const ExportacionesPage = Loadable(lazy(() => import('pages/exportaciones')));
const PrecioPage = Loadable(lazy(() => import('pages/precio')));
const RegisterFinca = Loadable(lazy(() => import('pages/auth/register-finca')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'clima-private',
          element: <ClimaPage />
        },
        {
          path: 'data',
          element: <DataPage />
        },
        {
          path: 'repositorio',
          element: <RepositorioPage />
        },
        {
          path: 'produccion',
          element: <ProduccionPage />
        },
        {
          path: 'exportaciones',
          element: <ExportacionesPage />
        },
        {
          path: 'precios',
          element: <PrecioPage />
        }
      ]
    },
    {
      path: '/',
      element: (
        <AuthGuard>
          <CommonLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'email-verify',
          element: <CheckMail />
        },
        {
          path: 'register-finca',
          element: <RegisterFinca />
        }
      ]
    }
  ]
};

export default MainRoutes;
