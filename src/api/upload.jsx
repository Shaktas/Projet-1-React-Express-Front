import { fetchAPI } from "./api";

const upload = {
  async uploadFile(data) {
    const formData = new FormData();
    formData.append("avatar", data);
    console.log(data, "data", formData, "formData");

    return fetchAPI(`/upload`, {
      method: "POST",
      body: formData,
      options: {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    });
  },
};

export default upload;
