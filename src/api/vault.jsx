import { fetchAPI } from "./api";

const vault = {
  async getVaults() {
    return fetchAPI("/vaults");
  },
  async getOneVault(id) {
    return fetchAPI(`/vault/${id}`);
  },
  async getUsersbyVault(id) {
    return fetchAPI(`/vault/${id}/users`);
  },
  async getCardsbyVault(id) {
    return fetchAPI(`/vault/${id}/cards`);
  },
  async createVault(name) {
    return fetchAPI("/vault", {
      method: "POST",
      body: JSON.stringify(name),
    });
  },
  async createCardForVault(id, name) {
    return fetchAPI(`/vault/${id}/card`, {
      method: "POST",
      body: JSON.stringify(name),
    });
  },
  async updateVault(id, name) {
    return fetchAPI(`/vault/${id}`, {
      method: "PUT",
      body: JSON.stringify(name),
    });
  },
  async updateCardByVault(vaultId, cardId, name) {
    return fetchAPI(`/vault/${vaultId}/card/${cardId}`, {
      method: "PUT",
      body: JSON.stringify(name),
    });
  },
  async deleteVault(id) {
    return fetchAPI(`/vault/${id}`, {
      method: "DELETE",
    });
  },
  async deleteCardByVault(vaultId, cardId) {
    return fetchAPI(`/vault/${vaultId}/card/${cardId}`, {
      method: "DELETE",
    });
  },
};

export default vault;
