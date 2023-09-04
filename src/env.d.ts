/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_CLIENT_ID: string;
  readonly VITE_APP_USER_POOL_ID: string;
  readonly VITE_REDIRECT_URL: string;
  readonly VITE_REDIRECT_URL_LOCAL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
