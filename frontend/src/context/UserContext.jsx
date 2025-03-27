import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const UserContext = createContext();

// Componente proveedor para envolver la aplicación
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [userProfile, setUserProfile] = useState(null); // Estado para almacenar el perfil del usuario

  // 1. Función para hacer login
  const login = (token, email) => {
    setToken(token);
    setEmail(email);

    // Guardamos en localStorage para persistencia
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  // 2. Función para registrar usuario
  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Error en el registro");

      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);

      // Guardar en localStorage para persistencia
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
    } catch (error) {
      console.error("Error en registro:", error);
    }
  };

  // 3. Función para cerrar sesión
  const logout = () => {
    setToken(null);
    setEmail("");
    setUserProfile(null); // Limpiamos el perfil al cerrar sesión
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  // 4. Función para obtener el perfil del usuario autenticado
  const fetchUserProfile = async () => {
    if (!token) return;

    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("No se pudo obtener el perfil");

      const data = await response.json();
      setUserProfile(data); // Guardamos el perfil completo del usuario
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
    }
  };

  // Obtener perfil al iniciar sesión
  useEffect(() => {
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token, email, userProfile, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para acceder al contexto desde cualquier componente
export const useUserContext = () => useContext(UserContext);

