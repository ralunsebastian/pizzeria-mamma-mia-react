import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";

function Profile() {
    return (
        <div className="main-content text-white">
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Perfil de Usuario</h2>
        <p>Email: seba@deslatam.cl</p>
        <button className="btn btn-danger w-100" onClick={() => alert("Sesión cerrada")}>Cerrar sesión</button>
      </div>
      </div>
    );
  }
  
  export default Profile;