const BASE_URL = "https://api.thecatapi.com/v1/images/";
const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const loadData = () => {
  return fetch(`${BASE_URL}search?size=full&limit=15`, {
    method: "GET",
    headers: {
      "X-Api-Key": "ea7f333c-f561-4961-9c4e-e4964e734b67",
    },
  }).then(getResponse);
};
