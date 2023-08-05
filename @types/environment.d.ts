declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CLIENT_URL: string;
      NEXT_PUBLIC_SERVER_URL: string;
      NEXT_PUBLIC_NODE_ENV: "development" | "production";
    }
  }
}

export {};
