import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import MinimalLayout from '@/layout/MinimalLayout/MinimalLayout';
import PortalLayout from '@/layout/PortalLayout/PortalLayout';

const UsersPage = lazy(() => import('./features/users/views/UsersPage/UsersPage'));
const UserDetailPage = lazy(() => import('./features/users/views/UsersPage/UsersPage'));
const UserCreationPage = lazy(() => import('./features/users/views/UserCreationPage/UserCreationPage'));

const Home = lazy(() => import('./features/home/views/Home/Home'));
const SignInPage = lazy(() => import('./features/auth/views/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('./features/auth/views/SignUpPage/SignUpPage'));

const PageLoader = () => {
  return <div>Loading...</div>;
};

export default function AppRouting() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/',
      element: <MinimalLayout />,
      children: [
        {
          path: 'sign-in',
          element: <SignInPage />,
        },
        {
          path: 'sign-up',
          element: <SignUpPage />,
        },
      ],
    },
    {
      path: '/',
      element: <PortalLayout />,
      children: [
        {
          path: 'users',
          element: <UsersPage />,
        },
        {
          path: 'users/create',
          element: <UserCreationPage />,
        },
        {
          path: 'users/:id',
          element: <UserDetailPage />,
        },
      ],
    },
  ]);

  return <Suspense fallback={<PageLoader />}>{routes}</Suspense>;
}
