import axios from 'axios';
import { serverConfig } from './serverConfig';

export const registerAdmin = async (email, password, secret) => {
  const config = {
    method: 'post',
    url: serverConfig.adminRegistration,
    data: { email, password, secret },
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  };
  const { data } = await axios(config);
  if (data.error) return { error: data.error };
  return { message: data.message };
};

export const registerUser = async (email, password) => {
  const config = {
    method: 'post',
    url: serverConfig.registrationURL,
    data: { email, password },
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  };
  const response = await axios(config);
  if (response.data?.error) return { error: response.data.error };
  return response?.data?.body;
};

export const loginUser = async (email, password) => {
  const config = {
    method: 'post',
    url: serverConfig.loginURL,
    data: { email, password },
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  };
  const response = await axios(config);
  if (response.data.error) return null;
  return response.data.body;
};

export const validateUser = async () => {
  const config = {
    method: 'get',
    url: serverConfig.validate,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  };
  const response = await axios(config);
  if (response.data.error) return { id: null, role: null };
  return response.data.body;
};

export const logoutUser = async () => {
  const config = {
    method: 'post',
    url: serverConfig.logoutURL,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  };
  await axios(config);
};

export const checkIsAvailableEmail = async (email) => {
  const body = { email };
  const response = await axios.post(serverConfig.isAvailableEmailURL, body);
  return response.data;
};

export const getPersonalData = async () => {
  const config = {
    method: 'get',
    url: serverConfig.getPersonalData,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  };
  const result = await axios(config);
  return result.data;
};

export const changeName = async (name) => {
  const config = {
    method: 'put',
    url: serverConfig.changeUserNameURL,
    withCredentials: true,
    data: { name },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  };
  const result = await axios(config);
  return result.data;
};
