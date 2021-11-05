export const baseURL = 'http://localhost:5000';

const settings = {
  registrationURL: `${baseURL}/registration`,
  isAvailableEmailURL: `${baseURL}/is-available-email`,
  loginURL: `${baseURL}/login`,
  createRecipeURL: `${baseURL}/create-recipe`,
  logoutURL: `${baseURL}/logout`,
  changeAvatarURL: `${baseURL}/change-avatar`,
  changeUserNameURL: `${baseURL}/change-name`,
  changeUserStatusURL: `${baseURL}/change-status`,
  changeUserEmailURL: `${baseURL}/change-email`,
  changeUserPasswordURL: `${baseURL}/change-password`,
  getPersonalData: `${baseURL}/personal-data`,
};

export default settings;
