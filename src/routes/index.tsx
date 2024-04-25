
import { useRoutes } from 'react-router-dom';

import { useUser } from '@/lib/auth';

import { publicRoutes } from './public';

function AppRoutes() {
  const user = useUser();
  

  const commonRoutes = [{ path: '/', element: <div>landing page</div> }];

  // const routes = auth.user ? protectedRoutes : publicRoutes;
  const routes =  publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
}


export default AppRoutes