import { Auth0Provider } from '@auth0/auth0-react';
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Auth0Provider
      domain={import.meta.env['VITE_AUTH0_DOMAIN']!}
      clientId={import.meta.env['VITE_AUTH0_CLIENT_ID']!}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env['VITE_AUTH0_API_AUDIENCE']!,
      }}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};
