import axios from 'axios';
import serverConfig from './serverConfig';

export const registerUser = async (email, password) => {
  const body = {
    email,
    password,
  };
  return await axios.post(serverConfig.registrationURL, body);
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
