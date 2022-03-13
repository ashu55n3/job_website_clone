export const setAuthToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getAuthToken = () => {
  return localStorage.getItem("token");
};

export const setUsername = (name: string) => {
  localStorage.setItem("name", name);
};

export const getUsername = () => {
  return localStorage.getItem("name");
};
