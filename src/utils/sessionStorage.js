import jwt_decode from 'jwt-decode';

const { localStorage } = global.window;

function clearLocalStorage() {
  localStorage.user = '';
  localStorage.token = '';
}

const session = {
  logout() {
    clearLocalStorage();
  },
  /**
   * Update stored session data
   * @param {{user, token}} data
   */
  setData(data) {
    if (data.usuario) localStorage.user = JSON.stringify(data.usuario || {});
    if (data.token) localStorage.token = data.token || '';
  },
  loggedIn() {
    return !!localStorage.token;
  },
  token() {
    return localStorage.token;
  },
  user() {
    const user = localStorage.user ? JSON.parse(localStorage.user) : null;
    if (user) {
      // read role from token
      if (this.token()) {
        try {
          const jwtDec = jwt_decode(this.token());
          user.rol = jwtDec.user.rol || 'ninguno';
        } catch (err) {
          this.setData({});
        }
      }
    }
    return user;
  },
};

export default session;
