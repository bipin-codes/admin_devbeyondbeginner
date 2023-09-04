import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container>
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
    </Container>
  );
};
export default Navbar;
