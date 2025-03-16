import React from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; // Asegúrate de importar el UserProvider
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <UserProvider> {/* Aquí solo envolvemos con UserProvider */}
      <div className="app-container">
        <Navbar />
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Rutas públicas, pero con verificación para redirigir si ya está logueado */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            
            {/* Ruta protegida para /profile */}
            <Route 
              path="/profile" 
              element={<ProtectedRoute element={<Profile />} />} 
            />
            
            {/* Rutas públicas */}
            <Route path="/cart" element={<Cart />} />
            
            {/* Ruta dinámica para pizza con ID */}
            <Route path="/pizza/:id" element={<Pizza />} />
            
            {/* Ruta no encontrada */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;

