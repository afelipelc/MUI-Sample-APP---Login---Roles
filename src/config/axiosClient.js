import axios from 'axios';
import session from '../utils/sessionStorage';

// usar este axios client en toda la app
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/',
  headers: {
    common: {
      Authorization: `jwt ${session.token()}`, // incluir en el header el token guardado en el storage
    },
  },
});

axiosClient.interceptors.response.use((response) => {
  // si recibe token, guardarlo en el storage
  if (response.data.token) {
    session.setData(response.data);
    axiosClient.defaults.headers.common.Authorization = `jwt ${response.data.token}`;
  }

  return response;
}, (error) => {
  if (!error.response) {
    return Promise.reject(error.message);
  }

  switch (error.response.status) {
    case 400: // en caso de petición erronea
   
      return Promise.reject(error.response.data);
    case 401: // cuando no es un token válido o usuario no autorizado, forzar el inicio de sesión
      session.logout();
      axiosClient.defaults.headers.common.Authorization = '';
      window.history.pushState({ prevUrl: window.location.href.pathname }, null, '/login');
      window.location.href = '/login';
      return error.response;
    default:
      return Promise.reject(error.response.data);
  }
});

export default axiosClient;
