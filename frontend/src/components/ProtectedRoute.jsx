import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';  // Verifica la ruta del contexto

const ProtectedRoute = ({ element }) => {
  const { token } = useUserContext();
  const navigate = useNavigate();

  if (!token) {
    navigate('/login'); // Redirige a login si no hay token
    return null; // No renderiza nada si el usuario no está logueado
  }

  return element; // Renderiza el componente si el usuario está logueado
};

export default ProtectedRoute;
