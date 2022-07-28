import Api from "./api.services";

export default class ProductApi {
  static getByCategoriesAndProduct = (categoryName, productName) => {
    return Api.get(
      `/api/products/getByCategoriesAndProduct?category=${categoryName}&productName=${productName}`
    ).then((data) => data.data);
  };

  static getTopSellingByLength = (length = 0) => {
    return Api.get(`/api/products/topSelling?length=${length}`).then(
      (data) => data.data
    );
  };

  static newProducts = () => {
    return Api.get(`/api/products/newProducts`).then((data) => data.data);
  };

  static allProducts = () => {
    return Api.get(`/api/products/getProducts`).then((data) => data.data);
  };

  static getPdByCategory = (category) => {
    return Api.get(`/api/products/getCategoryList?category=${category}`).then(
      (data) => data.data
    );
  };

  static getSinglePdByUrlLink = (pdUrl) => {
    return Api.get(`/api/products/getOne?pdUrl=${pdUrl}`).then(
      (data) => data.data
    );
  };

  static getRelatedProductByCategories = (category) => {
    return Api.get(`/api/products/relatedProducts?category=${category}`).then(
      (data) => data.data
    );
  };

  static searchProducts = (category = "All", query) => {
    return Api.get(
      `/api/products/searchProducts?category=${category}&query=${query}`
    ).then((data) => data.data);
  };
}
