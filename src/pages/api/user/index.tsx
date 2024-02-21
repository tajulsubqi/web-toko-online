import { deleteData, retrieveData, updateData } from "@/lib/firebase/service"
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
  } else if (req.method === "PUT") {
    const { id, data } = req.body
    await updateData("users", id, data, (result: boolean) => {
      if (result) {
        res.status(200).json({
          status: true,
          statuscode: 200,
          message: "Success update user",
        })
      } else {
        res.status(400).json({
          status: false,
          statusCode: 400,
          message: "Failed update user",
        })
      }
    })
  } else if (req.method === "DELETE") {
    const { id } = req.body
    await deleteData("users", id, (result: boolean) => {
      if (result) {
        res.status(200).json({
          status: true,
          statusCode: 200,
          message: "Success delete user",
        })
      } else {
        res.status(400).json({
          status: false,
          statusCode: 400,
          message: "Failed delete user",
        })
      }
    })
  }
}

export default handler
