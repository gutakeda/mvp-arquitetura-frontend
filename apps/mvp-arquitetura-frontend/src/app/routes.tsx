import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './components/Home';
import Login from './components/Login';

const AppRoutes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  // Verifica a autenticação e redireciona para a rota apropriada
  useEffect(() => {
    if (isLoading) return;
    if (!isAuthenticated) {
      navigate('/login'); // Se não autenticado, redireciona para /login
    } else {
      navigate('/home'); // Se autenticado, redireciona para /home
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
