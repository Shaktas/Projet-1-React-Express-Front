import { fetchAPI } from "./api";

const auth = {
  async login(data) {
    const { email, pwd } = data;
    return fetchAPI("/login", {
      method: "POST",
      body: JSON.stringify({ email, pwd }),
    });
  },
  async logout() {
    return fetchAPI("/logout");
  },
  async register(data) {
    const { pseudo, email, pwd } = data;
    return fetchAPI("/register", {
      method: "POST",
      body: JSON.stringify({ pseudo, email, pwd }),
    });
  },
  async verifyToken() {
    return fetchAPI("/verify", {
      method: "POST",
    });
  },
};

export default auth;
