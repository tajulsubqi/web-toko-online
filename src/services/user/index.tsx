import Instance from "@/lib/axios/Instance"

const userServices = {
  //get all user
  getAllUsers: async () => {
    try {
      const res = await Instance.get("/api/user")
      return res
    } catch (error) {
      console.log(error)
    }
  },

  //update user
  updateUsers: async (id: string, data: any) => {
    const res = await Instance.put("/api/user", {
      id,
      data,
    })
    return res
  },

  //delete user
  deleteUser: async (id: string) => {
    const res = await Instance.delete("/api/user", {
      data: {
        id,
      },
    })
    return res
  },
}

export default userServices
