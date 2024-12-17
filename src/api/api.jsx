import auth from "./auth";
import card from "./card";
import user from "./user";
import vault from "./vault";

const BASE_URL = "http://localhost:4000";

export async function fetchAPI(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    credentials: "include",
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
  vault,
  card,
};
