import axios from "axios";

const url = "https://course-api.com/react-tours-project";

// Get Categories
const getCategories = async () => {
  const response = await axios.get(url);
  return response.data;
};

const categoryService = {
  getCategories,
};

export default categoryService;
