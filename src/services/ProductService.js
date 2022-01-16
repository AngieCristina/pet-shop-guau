import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://sva.talana.com:8000/api/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getProducts(perPage, page) {
    return apiClient.get("/product?_limit=" + perPage + "&_page=" + page);
  },
  getProduct(id) {
    return apiClient.get("/product/" + id);
  },
  getCategory() {
    return apiClient.get("product-category");
  },
};
