import API from "@/lib/axios/API"

//fetch auth
const authServices = {
  registerAccount: (data: any) => API.post("api/user/register", data),

  loginAccount: (data: any) => API.post("api/user/login", data),
}

export default authServices
