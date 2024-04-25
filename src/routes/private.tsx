import { Suspense, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';


import { lazyImport } from '@/utils/lazyImport';
import { useLogout, useUser } from '@/lib/auth';


// const { Dashboard } = lazyImport(() => import('@/features/misc'), 'Dashboard');


const App = () => {
  const user = useUser()

  const logout = useLogout()
  function displayUserData() {
    console.log(user)
    console.log(user.data)
  }

  
  return (
    <div>
      <h3>App layout</h3>
      <button onClick={displayUserData}>Display user data</button>

      <button onClick={() => logout.mutate({})}>Logout</button>
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
      { path: 'dashboard', element: <div>Dashboard page</div> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
