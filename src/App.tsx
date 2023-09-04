import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const authURL = `https://admindevbeyondbeginner.auth.ap-south-1.amazoncognito.com/oauth2/authorize?client_id=2jftpa92vshhk2skr3pqgo00ev&response_type=token&scope=aws.cognito.signin.user.admin&redirect_uri=${
  import.meta.env.PROD
    ? import.meta.env.VITE_REDIRECT_URL
    : import.meta.env.VITE_REDIRECT_URL_LOCAL
}`;

function App() {
  const storageData = JSON.parse(localStorage.getItem('token') as string);
  const [authenticated] = useState(storageData ? storageData.token : null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      window.location.href = authURL;
    } else {
      navigate('/dashboard');
    }
  }, [authenticated, navigate]);
  return (
    <>
      <h1>Cleaned up App Component</h1>
    </>
  );
}

export default App;
