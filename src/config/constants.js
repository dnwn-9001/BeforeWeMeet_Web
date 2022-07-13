export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://before-we-meet.herokuapp.com"
    : "http://localhost:8081";

export const SOCKET_URL =
  process.env.NODE_ENV === "production"
    ? "https://before-we-meet.herokuapp.com:" + process.env.PORT + 1
    : "http://localhost:8082";
