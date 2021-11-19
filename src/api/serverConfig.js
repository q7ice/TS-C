export const baseURL = process.env.REACT_APP_API_URL ?? 'http://localhost:5000/api';
export const serverConfig = {
  registrationURL: `${baseURL}/registration`,
  isAvailableEmailURL: `${baseURL}/is-available-email`,
  loginURL: `${baseURL}/login`,
  logoutURL: `${baseURL}/logout`,
  changeUserNameURL: `${baseURL}/change-name`,
  changeUserEmailURL: `${baseURL}/change-email`,
  changeUserPasswordURL: `${baseURL}/change-password`,
  getPersonalData: `${baseURL}/personal-data`,
  getAllTests: `${baseURL}/getAllTests`,
  validate: `${baseURL}/validate`,
  createNewTest: `${baseURL}/createNewTest`,
  editTest: `${baseURL}/editTest`,
  getEditTest: `${baseURL}/getEditTest`,
  getOne: `${baseURL}/getOne`,
  destroyTest: `${baseURL}/destroyTest`,
  takeTest: `${baseURL}/takeTest`,
  changeOpenTest: `${baseURL}/changeOpenTest`,
  saveAnswers: `${baseURL}/saveAnswers`,
  getResults: `${baseURL}/getResults`,
  adminRegistration: `${baseURL}/adminRegistration`,
  blockUser: `${baseURL}/blockUser`,
};

export default serverConfig;
