import Instance from "@/lib/axios/Instance"

//all user
const userServices = {
  getAllUsers: async () => {
    try {
      const res = await Instance.get("/api/user")
      return res
    } catch (error) {
      console.log(error)
    }
  },
}

export default userServices
