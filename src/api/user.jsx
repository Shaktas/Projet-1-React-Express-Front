import { fetchAPI } from "./api";

const user = {
  async getUsers() {
    return fetchAPI("/users");
  },
  async getOneUser(id) {
    return fetchAPI(`/user/${id}`);
  },
  async getVaultsbyUser(id) {
    return fetchAPI(`/user/${id}/vaults`);
  },
  async updateUser(id, pseudo, email, password) {
    return fetchAPI(`/user/${id}`, {
      method: "PUT",
      body: JSON.stringify({ pseudo, email, password }),
    });
  },
  async deleteUser(id) {
    return fetchAPI(`/user/${id}`, {
      method: "DELETE",
    });
  },
};

export default user;
