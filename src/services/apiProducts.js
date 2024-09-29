import axios from "axios";
import { url as baseUrl } from "../utilities/url";
import setLocalStorageItem from "../utilities/setLocalStorageItem";

export async function getProductsApi({ category, params }) {
  let url = `${baseUrl}/products?category=${category}&`;

  params.forEach((arrayEl) => {
    const [field, value] = arrayEl;
    url = `${url}${field}=${value}&`;
  });

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getProductApi(name) {
  let url = `${baseUrl}/products/${name}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getCartProductsApi(idArray) {
  if (!idArray || idArray.length === 0) return null;
  let url = `${baseUrl}/products/cart/`;
  idArray.forEach((id) => {
    url = `${url}${id}-`;
  });

  try {
    const response = await axios.get(url.slice(0, -1));
    return response.data;
  } catch (error) {
    setLocalStorageItem("cart", []);
    throw new Error(error.response.data.message);
  }
}

export async function getFeaturedProductsApi() {
  let url = `${baseUrl}/products/featured`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getDiscountedProductsApi() {
  let url = `${baseUrl}/products/discounted`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
