import { fetchAPI } from "./api";

const user = {
  async getOneUser(id) {
    return fetchAPI(`/user/${id}`);
  },
  async getVaultsbyUser(id) {
    return fetchAPI(`/user/${id}/vaults`);
  },
  async updateUser(id, pseudo, email) {
    return fetchAPI(`/user/${id}`, {
      method: "PUT",
      body: JSON.stringify({ pseudo, email }),
    });
  },
  async deleteUser(id) {
    return fetchAPI(`/user/${id}`, {
      method: "DELETE",
    });
  },
};

export default user;
