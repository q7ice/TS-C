import axios from 'axios';
import serverConfig from './serverConfig';

export const registerUser = async (email, password) => {
  const body = {
    email,
    password,
  };
  const { data } = await axios.post(serverConfig.registrationURL, body);
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
  return response.data;
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
