import auth0 from "auth0-js";

const { IS_DEV } = require("../server/db/config");

const redirectUri = IS_DEV
  ? "http://localhost:8080/callback"
  : "https://take-my-money.herokuapp.com/callback";

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: "dev-532l1po4.eu.auth0.com",
      audience: "https://dev-532l1po4.eu.auth0.com/userinfo",
      clientID: "MfWXuUWdMvJDyMDTNIHQkslK6u8mTdXu",
      redirectUri,
      responseType: "id_token",
      scope: "openid profile"
    });
  }

  getProfile = () => this.profile;

  getIdToken = () => this.idToken;

  isAuthenticated = () => new Date().getTime() < this.expiresAt;

  signIn = () => {
    this.auth0.authorize();
  };

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        resolve();
      });
    });
  }

  signOut = () => {
    // clear id token, profile, and expiration
    this.idToken = null;
    this.profile = null;
    this.expiresAt = null;
  };
}

const auth0Client = new Auth();

export default auth0Client;
