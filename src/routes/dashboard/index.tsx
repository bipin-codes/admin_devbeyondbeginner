import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';

const Dashboard = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const queries = hash.substring(1).split('&');
      const token = queries[0].split('=')[1]; // get ... access_token
      localStorage.setItem('token', JSON.stringify({ token }));
    } else {
      const { token } = JSON.parse(localStorage.getItem('token') as string);
      console.log(token);
    }
  }, [hash]);

  return (
    <Container fluid>
      <Navbar />
      <Outlet></Outlet>
    </Container>
  );
};
export default Dashboard;
