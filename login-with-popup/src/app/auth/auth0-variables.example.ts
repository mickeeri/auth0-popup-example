interface AuthConfig {
  clientID: string;
  domain: string;
  redirectUri: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'clientID',
  domain: 'AUTH_CONFIG',
  redirectUri: 'http://localhost:4200/callback',
};
