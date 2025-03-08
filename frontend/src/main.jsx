import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Importa el CartProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>  {/* Aquí envolvemos App con CartProvider */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
