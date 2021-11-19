import axios from 'axios';
import { serverConfig } from './serverConfig';

export const blockUser = async (blockId) => {
  const config = {
    method: 'post',
    url: serverConfig.blockUser,
    data: { blockId },
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
  };
  const response = await axios(config);
  return response.data;
};
