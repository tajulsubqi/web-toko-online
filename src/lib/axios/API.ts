import axios from "axios"

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Chace-Control": "no-cache",
  Expires: 0,
}

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers,
  timeout: 60 * 1000,
})

API.interceptors.request.use(
  (config) => config,
  (error) => error,
)

API.interceptors.response.use(
  (response) => response,
  (error) => error,
)

export default API
