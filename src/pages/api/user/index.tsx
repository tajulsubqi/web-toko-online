import { retrieveData } from "@/lib/firebase/service"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const users = await retrieveData("users")
    // console.log(users)
    const data = users.map((user: any) => {
      delete user.password
      return user
    })

    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Success get user",
      data,
    })
  }
}

export default handler
