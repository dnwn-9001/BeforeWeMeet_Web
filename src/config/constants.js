export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://before-we-meet.herokuapp.com"
    : "http://localhost:8081";

export const SOCKET_URL =
  process.env.NODE_ENV === "production" ? null : "http://localhost:80";
