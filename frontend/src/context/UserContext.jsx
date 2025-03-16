import React, { createContext, useState, useContext } from 'react';

// 1. Creamos el contexto
const UserContext = createContext();

// 2. Creamos el proveedor
export const UserProvider = ({ children }) => {
  // 3. El estado del token, por defecto será null (simulando que el usuario no está autenticado)
  const [token, setToken] = useState(null);  // null indica que no hay token

  // 4. Método para hacer logout (cambiar el estado del token a null)
  const logout = () => {
    setToken(null);  // Lo dejamos en null para indicar que el usuario ha cerrado sesión
  };

  // 5. Método para hacer login (simulamos asignar un token)
  const login = (newToken) => {
    setToken(newToken);  // Asignamos el token simulado al estado
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// 6. Hook para usar el contexto en otros componentes
export const useUserContext = () => useContext(UserContext);
