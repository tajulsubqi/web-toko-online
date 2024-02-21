import Instance from "@/lib/axios/Instance"

//POST Auth
const authServices = {
  registerAccount: async (data: any) => {
    console.log(data)
    try {
      const res = await Instance.post("/api/user/register", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      return res
    } catch (error: any) {
      return { status: false, error: error.response.data.message }
    }
  },
}

export default authServices
