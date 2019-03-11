import auth0 from "auth0-js";

const { domain, clientID, site } = require("../../../server/db/config");

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      audience: `https://${domain}/userinfo`,
      redirectUri: `${site}/callback`,
      responseType: "id_token",
      scope: "openid profile",
      clientID,
      domain
    });
  }

  getUser = () => this.profile;

  getIdToken = () => this.idToken;

  isAuth = () => new Date().getTime() < this.expiresAt;

  signIn = () => {
    this.auth0.authorize();
  };

  handleAuth = () => new Promise((resolve, reject) => {
    this.auth0.parseHash((err, authResult) => {
      if (err) return reject(err);
      if (!authResult || !authResult.idToken) {
        return reject(err);
      }
      this.setSession(authResult);
      resolve();
    });
  });

  setSession(authResult) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    this.expiresAt = authResult.idTokenPayload.exp * 1000;
  }

  signOut = (path) => {
    const returnTo = path ? `${site}${path}` : site;
    this.auth0.logout({
      returnTo,
      clientID
    });
  };

  silentAuth = () => new Promise((resolve, reject) => {
    this.auth0.checkSession({}, (err, authResult) => {
      if (err) return reject(err);
      this.setSession(authResult);
      resolve();
    });
  });
}

const auth0Client = new Auth();

export default auth0Client;
