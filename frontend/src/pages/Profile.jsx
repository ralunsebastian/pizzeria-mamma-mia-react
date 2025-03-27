import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Profile = () => {
  const { userProfile, logout } = useUserContext();
  const navigate = useNavigate();

  // Redirigir si el usuario no está logueado
  useEffect(() => {
    if (!userProfile) {
      navigate("/login"); // Redirige al login si no está autenticado
    }
  }, [userProfile, navigate]);

  return (
    <div className="main-content text-white">
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Perfil de Usuario</h2>
        {userProfile ? (
          <>
            <p>Email: {userProfile.email}</p>
            <button className="btn btn-danger w-100" onClick={logout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <p>Cargando perfil...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
