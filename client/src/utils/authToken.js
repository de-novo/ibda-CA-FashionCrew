export const getStoeredAuthToken = () => localStorage.getItem("authToken");

export const storeAuthToken = () => localStorage.setItem("authToken", token);

export const removeStoredAuthToken = () => localStorage.removeItem("authToken");
