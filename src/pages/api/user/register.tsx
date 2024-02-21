import { signUp } from "@/services/serviceAuth"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    if (!req.body.email || !req.body.fullname || !req.body.password) {
      return res
        .status(400)
        .json({ status: false, message: "Please fill all the fields" })
    }
    
    await signUp(req.body, (status: boolean) => {
      if (status) {
        res.status(200).json({ status: true, message: "Register success" })
      } else {
        res.status(400).json({ status: false, message: "Register failed" })
      }
    })
  } else {
    res.status(405).json({ status: false, message: "Method not allowed" })
  }
}
