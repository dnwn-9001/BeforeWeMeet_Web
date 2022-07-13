export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://before-we-meet.herokuapp.com"
    : "http://localhost:8081";

export const SOCKET_URL =
  process.env.NODE_ENV === "production"
    ? "https://before-we-meet.herokuapp.com:80"
    : "http://localhost:8082";
