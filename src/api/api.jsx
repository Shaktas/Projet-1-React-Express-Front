import auth from "./auth";
import user from "./user";

const BASE_URL = "http://localhost:3000";

export async function fetchAPI(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export const api = {
  auth,
  user,
};
