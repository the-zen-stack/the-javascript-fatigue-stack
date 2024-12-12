// Form validation utilities
export const validateMinLength = (value, minLength) => {
  return value.trim().length >= minLength;
};

export const showError = message => {
  alert(message); // In a real app, replace with better UI feedback
};