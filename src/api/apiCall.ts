import { getAuthToken } from "../lib/localStorage";

const apiCall = async (config: {
  endpoint: string;
  method: "get" | "post" | "put" | "delete";
  body?: any;
}) => {
  const baseUrl = "https://jobs-api.squareboat.info/api/v1";
  return fetch(`${baseUrl}/${config.endpoint}`, {
    method: config.method,
    headers: {
      Authorization: getAuthToken() || "",
      "Content-type": "application/json; charset=UTF-8",
    },
    body: (config.body && JSON.stringify(config.body)) || undefined,
  });
};

export default apiCall;
