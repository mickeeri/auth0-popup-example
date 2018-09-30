interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'jDP9X2q8IGyFE41WiLdn4ibIsGcRYmIB',
  domain: 'micke-test.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
};
