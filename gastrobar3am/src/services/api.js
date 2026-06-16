const DEFAULT_API_BASE_URL = "http://localhost:5000";
const TOKEN_KEY = "token";

const normalizedBaseUrl = (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000").replace(/\/$/, "");

export const API_BASE_URL = normalizedBaseUrl;

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getAuthHeaders(token = getToken()) {
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function readResponseBody(response) {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

export async function apiFetch(path, options = {}) {
  const { auth = true, headers = {}, body, ...rest } = options;
  const requestHeaders = new Headers(headers);

  if (auth) {
    const authHeaders = getAuthHeaders();

    Object.entries(authHeaders).forEach(([key, value]) => {
      requestHeaders.set(key, value);
    });
  }

  let requestBody = body;

  if (body && !(body instanceof FormData) && typeof body === "object") {
    requestHeaders.set("Content-Type", "application/json");
    requestBody = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...rest,
    headers: requestHeaders,
    body: requestBody,
  });

  const responseBody = await readResponseBody(response);

  if (!response.ok) {
    const message =
      typeof responseBody === "string"
        ? responseBody
        : responseBody?.message || responseBody?.error || "No se pudo completar la solicitud.";

    throw new Error(message);
  }

  return responseBody;
}

export function getTokenFromResponse(payload) {
  return payload?.token || payload?.accessToken || payload?.jwt || payload?.data?.token || null;
}

export function getRoleFromResponse(payload) {
  return (
    payload?.role ||
    payload?.rol ||
    payload?.tipo ||
    payload?.user?.role ||
    payload?.user?.rol ||
    payload?.user?.tipo ||
    payload?.data?.role ||
    payload?.data?.rol ||
    payload?.data?.tipo ||
    null
  );
}

export async function loginUser(credentials) {
  return apiFetch("/api/users/login", {
    method: "POST",
    auth: false,
    body: credentials,
  });
}

export async function registerUser(userData) {
  return apiFetch("/api/users/register", {
    method: "POST",
    auth: false,
    body: userData,
  });
}

export async function getMe() {
  return apiFetch("/api/me", {
    method: "GET",
  });
}