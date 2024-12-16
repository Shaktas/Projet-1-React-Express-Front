import { fetchAPI } from "./api";

const card = {
  async getCards() {
    return fetchAPI("/cards");
  },
  async getOneCard(id) {
    return fetchAPI(`/card/${id}`);
  },
  async createCard(cardId, title, login, pwd, url, vaultId) {
    return fetchAPI(`/card/${cardId}/vault/${vaultId}`, {
      method: "POST",
      body: JSON.stringify({ title, login, pwd, url }),
    });
  },
  async updateCard(id, title, login, pwd, url, vaultId) {
    return fetchAPI(`/card/${id}/vault/${vaultId}`, {
      method: "PUT",
      body: JSON.stringify({ title, login, pwd, url }),
    });
  },
  async deleteCard(id) {
    return fetchAPI(`/card/${id}`, {
      method: "DELETE",
    });
  },
};

export default card;
