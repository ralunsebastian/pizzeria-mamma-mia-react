import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const { login } = useUserContext();  // Usamos el login del contexto
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    // Simulamos la validación del login
    if (email === 'seba@deslatam.cl' && password === '123456') {
      const fakeToken = 'fake-token';  // Aquí el token puede ser un valor simulado o real
      login(fakeToken);  // Actualizamos el token usando el método login
      setMessage('🟢 Login exitoso');
      navigate('/profile');
    } else {
      setMessage('❌ Error en los datos de inicio de sesión');
    }
  };

  return (
    <div className="main-content">
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
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Iniciar sesión
                </button>
              </form>

              {message && (
                <div className={`alert mt-3 ${message.includes("❌") ? "alert-danger" : "alert-success"}`}>
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

