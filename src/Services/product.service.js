import http from "../http-common";

class ProductDataService {
  getAll() {
    return http.get(`/product`);
  }

  getById(id){
    return http.get(`/product/${id}`);
  }
}

export default new ProductDataService();