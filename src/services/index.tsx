import API from "@/lib/axios/API"

//fetch auth
const authServices = {
  registerAccount: (data: any) => API.post("api/user/register", data),
}

export default authServices
