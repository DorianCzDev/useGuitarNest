import axios from "axios";
import { url as baseUrl } from "../utilities/url";

export async function signInApi(body) {
  try {
    const response = await axios.post(`${baseUrl}/auth/signin`, body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getCurrentUserApi() {
  try {
    const response = await axios.get(`${baseUrl}/users/whoami`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function updateUserApi(user) {
  const url = `${baseUrl}/users`;
  try {
    const response = await axios.patch(url, user);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function updateUserPasswordApi(data) {
  const url = `${baseUrl}/users/update-password`;
  try {
    const response = await axios.patch(url, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function signOutApi() {
  const url = `${baseUrl}/auth/signout`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function signUpApi(body) {
  const url = `${baseUrl}/auth/signup`;
  try {
    const response = await axios.post(url, body);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function verifyEmailApi({ email, verificationToken }) {
  const url = `${baseUrl}/users/verify-email`;
  try {
    const response = await axios.post(url, { email, verificationToken });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function resetPasswordApi({
  forgotPasswordToken,
  email,
  password,
}) {
  const url = `${baseUrl}/users/reset-password`;
  try {
    const response = await axios.patch(url, {
      forgotPasswordToken,
      email,
      password,
    });
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function forgotPasswordApi(email) {
  const url = `${baseUrl}/users/forgot-password`;
  try {
    const response = await axios.post(url, { email });
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
