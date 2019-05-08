import axios from "axios";

export function getAPOD(date = " ") {
  return axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=HU272c1MQrPQzySjhiJJqcxx4g1qZXKc3Bogdvpa`
  );
}
