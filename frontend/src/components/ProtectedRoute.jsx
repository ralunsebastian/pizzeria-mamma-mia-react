import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';  // Verifica la ruta del contexto

const ProtectedRoute = ({ element }) => {
  const { token } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login'); // Redirige a login si no hay token
    }
  }, [token, navigate]); // Dependencias para actualizar la redirección si el token cambia

  if (!token) {
    return null; // No renderiza nada mientras se espera la redirección
  }

  return element; // Renderiza el componente si el usuario está logueado
};

export default ProtectedRoute;

