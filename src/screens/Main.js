import React from 'react';
import { useSessionState } from '../sessionContext';

const Main = () => {
  const { user } = useSessionState();

  return (
    <div>
      <h1>Página principal</h1>

      <h3>Hola {user?.nombre || 'Usuario'}, bienvenido</h3>
      <h5>Tu rol es: {user?.rol || ''}</h5>
      
      {user && user.rol === 'admin' && (
        <h5>Solo un admin puede leer esto...</h5>
      )}
    </div>
  );
}

export default Main;
