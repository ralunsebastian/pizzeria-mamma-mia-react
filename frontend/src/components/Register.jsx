import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.confirmPassword) {
      setMessage("❌ Todos los campos son obligatorios.");
      return;
    }

    if (form.password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("❌ Las contraseñas no coinciden.");
      return;
    }

    setMessage("✅ Registro exitoso");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center mb-4">Registro</h2>
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

              <div className="mb-3">
                <label className="form-label">Confirmar contraseña</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Repite tu contraseña"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Registrarse
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
  );
};

export default Register;
