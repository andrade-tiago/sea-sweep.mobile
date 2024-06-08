import axios from "axios";

export const api = axios.create({
  baseURL: 'https://fiap-seasweep-backend.onrender.com/',
})
