import ResetPassword from "../Components/Authentication/ResetPassword";
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
    return fetchAPI("/logout", {
      method: "POST",
    });
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
  async refreshToken() {
    return fetchAPI("/refresh", {
      method: "POST",
    });
  },
  async resetPassword(email) {
    return fetchAPI("/reset-password", {
      method: "POST",
      body: JSON.stringify({ userEmail: email, action: "reset-password" }),
    });
  },
  async updatePassword(token, password) {
    console.log(token, password);

    return fetchAPI("/updatePassword/", {
      method: "PUT",
      body: JSON.stringify({ token, password }),
    });
  },
};

export default auth;
