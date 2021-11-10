import axios from 'axios';
import serverConfig from './serverConfig';

export const getAllTests = async () => {
  const config = {
    method: 'get',
    url: serverConfig.getAllTests,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  };
  const response = await axios(config);
  return response.data;
};

export const destroyTest = async (testId) => {
  const config = {
    method: 'post',
    url: serverConfig.destroyTest,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    data: { testId },
  };
  const response = await axios(config);
  return response.data.body;
};

export const getOneTest = async (testId) => {
  const config = {
    method: 'post',
    url: serverConfig.getOne,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    data: { testId },
  };
  const response = await axios(config);
  return response.data.body;
};

export const createNewTest = async (name, questions) => {
  const config = {
    method: 'post',
    url: serverConfig.createNewTest,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    data: { name, questions },
  };
  const response = await axios(config);
  return !response.data.error;
};

export const editTest = async (testId, name, questions) => {
  const config = {
    method: 'post',
    url: serverConfig.editTest,
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    data: { testId, name, questions },
  };
  const response = await axios(config);
  return !response.data.error;
};
