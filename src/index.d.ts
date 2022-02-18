declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_UR: string;
      NEXTAUTH_URL: string;
      JWT_SECRET: string;
      GITHUB_ID: string;
      GITHUB_SECRET: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
    }
  }
}
