import { lazy } from 'react';

// project import
import GuestGuard from 'utils/route-guard/GuestGuard';
import CommonLayout from 'layout/CommonLayout';
import MainLayoutPublic from 'layout/MainLayoutPublic';
import Loadable from 'components/Loadable';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/auth/login')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/register')));
//const AuthRegisterFinca = Loadable(lazy(() => import('pages/auth/register-finca')));
const AuthRegisterCompany = Loadable(lazy(() => import('pages/auth/register-company')));
const AuthForgotPassword = Loadable(lazy(() => import('pages/auth/forgot-password')));
const Landing = Loadable(lazy(() => import('pages/landing')));
const Politica = Loadable(lazy(() => import('pages/politica')));
const ClimaPage = Loadable(lazy(() => import('pages/clima')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
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
          path: '',
          element: <Landing />
        },
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        },
        {
          path: 'forgot-password',
          element: <AuthForgotPassword />
        },
        {
          path: 'register-company',
          element: <AuthRegisterCompany />
        },
        {
          path: 'politica',
          element: <Politica />
        },
        {
          path: 'clima',
          element: <ClimaPage />
        }
      ]
    },
    {
      path: '/clima',
      children: [
        {
          path: '/clima',
          element: (
            <GuestGuard>
              <MainLayoutPublic />
            </GuestGuard>
          ),
          children: [
            {
              path: '/clima/public',
              element: <ClimaPage />
            }
          ]
        }
      ]
    }
  ]
};

export default LoginRoutes;
