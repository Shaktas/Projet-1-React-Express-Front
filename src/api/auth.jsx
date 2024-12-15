import { fetchAPI } from "./api";

const auth = {
  async login(email, password) {
    return fetchAPI("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },
  async logout() {
    return fetchAPI("/auth/logout");
  },
  async register(pseudo, email, password) {
    return fetchAPI("/auth/register", {
      method: "POST",
      body: JSON.stringify({ pseudo, email, password }),
    });
  },
};

export default auth;
