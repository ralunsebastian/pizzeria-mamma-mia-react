import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ text: "", type: "" });  // Mensaje con tipo (error/success)
  const { login, user } = useUserContext();  
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario ya está logueado, lo redirigimos al perfil.
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" }); // Limpiar mensaje previo

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al iniciar sesión");
      }

      // Guardamos el token en localStorage para mantener la sesión activa
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      
      // Llamamos la función de login del contexto
      login(data.token, data.email);  // Guarda el token en el contexto

      setMessage({ text: "🟢 Login exitoso", type: "success" });
      navigate("/profile");
    } catch (error) {
      setMessage({ text: `❌ ${error.message}`, type: "error" });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Ingresa tu correo"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"  // Agregado para mejor UX
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Ingresa tu contraseña"
                  value={form.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"  // Agregado para mejor UX
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
            </form>

            {message.text && (
              <div className={`alert mt-3 ${message.type === "error" ? "alert-danger" : "alert-success"}`}>
                {message.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


