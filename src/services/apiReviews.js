import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function getProductReviewsApi(productId, rating) {
  let url = "";
  url = `${baseUrl}/reviews/${productId}`;

  if (rating) {
    url = `${baseUrl}/reviews/${productId}?rating=${rating}`;
  }
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function createReviewApi({ productId, review }) {
  const url = `${baseUrl}/reviews/${productId}`;

  try {
    const response = await axios.post(url, review);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function reportReviewApi(id) {
  const url = `${baseUrl}/reviews/report/${id}`;
  try {
    const response = await axios.patch(url);
    return response.data.msg;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
