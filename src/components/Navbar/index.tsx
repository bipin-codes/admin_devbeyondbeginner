import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>Navbar</div>
      <ul>
        <li>
          <Link to={'/dashboard'}>Home</Link>
        </li>
        <li>
          <Link to={'/dashboard/blogs'}>Blog Management</Link>
        </li>
        <li>
          <Link to={'/dashboard/categories'}>Categories Management</Link>
        </li>
      </ul>
    </>
  );
};
export default Navbar;
