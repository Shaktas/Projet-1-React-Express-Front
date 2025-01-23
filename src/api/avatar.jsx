import { fetchAPI } from "./api.jsx";

const avatar = {
  getAvatar: async () => {
    const data = await fetchAPI("/avatar");
    return data;
  },
};

export default avatar;
