import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function getDeliveryMethodsApi() {
  let url = `${baseUrl}/delivery`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
