// api/service.js
import axios from "../axios/index"; // Проверьте, что путь корректный

const service = {
  getAllProducts: async () => {
    try {
      const response = await axios.get("/posts");
      return response.data; // Вернем только данные
    } catch (error) {
      throw new Error("Не удалось загрузить данные");
    }
  },
};

export default service;
