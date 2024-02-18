import axios from "axios"

// const headers = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
//   "Chace-Control": "no-cache",
//   Expires: 0,
// }

// const Instance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   headers,
//   timeout: 60 * 1000,
// })

// Instance.interceptors.request.use(
//   (config) => config,
//   (error) => error,
// )

// Instance.interceptors.response.use(
//   (response) => response,
//   (error) => error,
// )

// export default Instance

const Instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Chace-Control": "no-cache",
    Expires: 0,
  },
  timeout: 60 * 1000,
})

export default Instance
