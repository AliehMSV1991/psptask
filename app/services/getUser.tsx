import axios from "axios";

async function getData() {
  const options = {
    headers: {
      accept: "application/json",
    },
  };

  const response = axios
    .get("https://jsonplaceholder.typicode.com/users", options)
    .then((response) => response)
    .catch((err) => console.error(err));

  return response;
}

export default async function getUser() {
  const data = await getData();
  return data;
}
