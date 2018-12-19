import APIClient from "../apiClient/apiClient";

export function getTime()  {
    return fetch(APIClient.url("api/time"))
        .then((response) => response.json());
}
