import auth from "./auth";
import card from "./card";
import user from "./user";
import vault from "./vault";
import upload from "./upload";
import avatar from "./avatar";

const BASE_URL = "https://localhost:4000";

export async function fetchAPI(endpoint, options = {}) {
  let headers = {};
  if (!(options.body instanceof FormData)) {
    headers = {
      "Content-Type": "application/json",
      ...options.headers,
    };
  } else {
    headers = {
      ...options.headers,
    };
  }
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    credentials: "include",
    headers: headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  if (response.headers.get("Content-Type").includes("image")) {
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  }
  return response.json();
}

export const api = {
  auth,
  user,
  vault,
  card,
  upload,
  avatar,
};
