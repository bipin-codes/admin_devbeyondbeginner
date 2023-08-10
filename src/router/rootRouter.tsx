import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Dashboard from '../routes/dashboard';
import Auth from '../routes/auth';
import Categories from '../routes/dashboard/categories';
import Blogs from '../routes/dashboard/blogs';
import Blog from '../routes/dashboard/blogs/blog';

const rootRouter = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: 'auth', element: <Auth /> },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      { path: '/dashboard/categories', element: <Categories /> },
      {
        path: '/dashboard/blogs',
        element: <Blogs />,
      },
      { path: '/dashboard/blog_details/:blogId', element: <Blog /> },
    ],
  },
]);

export default rootRouter;
