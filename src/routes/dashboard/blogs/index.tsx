import { Link, Outlet } from 'react-router-dom';
const Blogs = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/dashboard/blog_details/1">Blog 1</Link>
        </li>
        <li>
          <Link to="/dashboard/blog_details/2">Blog 2</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Blogs;
