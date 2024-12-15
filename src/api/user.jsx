import { fetchAPI } from "./api";

const user = {
  async getUsers() {
    return fetchAPI("/users");
  },
  async getOneUser() {
    return fetchAPI("/user/:id");
  },
  async updateUser(pseudo, email, password) {
    return fetchAPI("/user", {
      method: "PUT",
      body: JSON.stringify({ pseudo, email, password }),
    });
  },
  async deleteUser() {
    return fetchAPI("/user", {
      method: "DELETE",
    });
  },
};

export default user;
