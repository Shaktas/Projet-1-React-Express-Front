import { fetchAPI } from "./api";

const upload = {
  async uploadFile(data) {
    const formData = new FormData();
    formData.append("avatar", data);

    return fetchAPI(`/upload`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default upload;
