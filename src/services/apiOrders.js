import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function createOrderApi({ body }) {
  const url = `${baseUrl}/orders`;
  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
