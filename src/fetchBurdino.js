import config from "react-global-configuration";

const responseToJson = (response) => response.json();

export default function fetchBurdino(route) {
  const baseUrl = config.get("baseUri");
  console.log(`Fetch : ${baseUrl}${route}`);
  return fetch("./db.json").then(responseToJson);
}
