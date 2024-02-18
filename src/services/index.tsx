import Instance from "@/lib/axios/Instance"

// //fetch auth
// const authServices = {
//   registerAccount: (data: any) => Instance.post("api/user/register", data),
// }

//POST Auth
const authServices = {
  registerAccount: async (data: any) => {
    try {
      const res = await Instance.post("api/user/register", data)
      return res
    } catch (error) {
      console.log(error)
    }
  },
}

export default authServices
