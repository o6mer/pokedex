import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

export {instance};
