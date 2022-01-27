export const getStoeredAuthToken = () => localStorage.getItem("authToken");

// 
export const storeAuthToken = (TOKEN) => localStorage.setItem("authToken", TOKEN);

export const removeStoredAuthToken = () => localStorage.removeItem("authToken");
