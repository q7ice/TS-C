import { useState } from 'react';

export const useAlertContext = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const showError = (message) => {
    setError('');
    setError(message);
  };

  const showSuccess = (message) => {
    setSuccess('');
    setSuccess(message);
  };

  const AlertValue = {
    error,
    success,
    setError,
    setSuccess,
    showError,
    showSuccess,
  };

  return { AlertValue };
};
