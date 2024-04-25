
import { useRoutes } from 'react-router-dom';


import { publicRoutes } from './public';
import { protectedRoutes } from './private';
import { useUser } from '@/lib/auth';

function AppRoutes() {
  const user = useUser();


  const commonRoutes = [
    { path: '/', element: <div>landing page</div> },
  ];

  const routes = user.data ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
}


export default AppRoutes