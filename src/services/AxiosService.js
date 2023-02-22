import axios from "axios"
import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
});


export const sandboxAPI = new axios.create ({
  baseURL: "https://bcw-sandbox.herokuapp.com/api",
  timeout: 8000,
});