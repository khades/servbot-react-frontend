import APIClient from "../apiclient";

export function getTime()  {
    return fetch(APIClient.url("api/time"))
        .then((response) => response.json());
}
