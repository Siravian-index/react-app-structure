import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';


import { lazyImport } from '@/utils/lazyImport';


// const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');


const App = () => {
  return (
    <div>
      <h3>App layout</h3>
      <Suspense
        fallback={
          <div>
            loading
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      // { path: '/discussions/*', element: <DiscussionsRoutes /> },
      // { path: '/users', element: <Users /> },
      // { path: '/profile', element: <Profile /> },
      { path: '/', element: <div>Dashboard page</div> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
