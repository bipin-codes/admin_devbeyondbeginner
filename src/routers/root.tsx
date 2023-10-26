import App from 'App';
import Dashboard from 'pages/Dashboard';
import Blogs from 'pages/Dashboard/Blogs';
import Categories from 'pages/Dashboard/Categories';
import Comments from 'pages/Dashboard/Comments';
import Default from 'pages/Dashboard/Default';

import Error from 'pages/Error';
import { createBrowserRouter } from 'react-router-dom';

const rootRouter = createBrowserRouter([
  { path: '', element: <App />, errorElement: <Error /> },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { index: true, element: <Default /> },
      { path: 'blogs', element: <Blogs /> },
      { path: 'categories', element: <Categories /> },
      { path: 'comments', element: <Comments /> },
    ],
  },
]);
export default rootRouter;
