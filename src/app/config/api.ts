const configuredBase = (import.meta as any).env?.VITE_API_BASE_URL as
  | string
  | undefined;

const isLocalhost =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

const PRODUCTION_API_BASE = "https://api.ekointernationaltradeexpo.com";
const LOCAL_API_BASE = "http://localhost:5000";

function isLocalApiUrl(url: string) {
  return (
    url.includes("localhost") ||
    url.includes("127.0.0.1") ||
    url.includes("0.0.0.0")
  );
}

export const API_BASE_URL = (() => {
  if (isLocalhost) {
    // Allow local backend override during development.
    return configuredBase || LOCAL_API_BASE;
  }

  // Production: ignore any configured localhost backend values.
  if (configuredBase && !isLocalApiUrl(configuredBase)) {
    return configuredBase;
  }

  return PRODUCTION_API_BASE;
})();

