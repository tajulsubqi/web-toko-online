import { adddata, retrieveDataByField } from "@/lib/firebase/service"
import bcrypt from "bcrypt"

// service untuk register
export async function signUp(
  userData: {
    fullname: string
    email: string
    password: string
    role?: string
    createdAt?: Date
    updatedAt?: Date
  },
  callback: Function,
) {
  const data = await retrieveDataByField("users", "email", userData.email)
  if (data.length > 0) {
    callback(false)
  } else {
    if (!userData.role) {
      userData.role = "member"
    }

    // Hash password
    userData.password = await bcrypt.hash(userData.password, 10)
    userData.createdAt = new Date()
    userData.updatedAt = new Date()

    adddata("users", userData, (result: boolean) => {
      callback(result)
    })
  }
}

// service untuk signIn/login
export async function signIn(email: string) {
  const data = await retrieveDataByField("users", "email", email)

  if (data) {
    return data[0]
  } else {
    return null
  }
}

//login with goggle
export async function loginWithGoogle(
  data: { email: string; role?: string },
  callback: Function,
) {
  const user = await retrieveDataByField("users", "email", data.email)

  if (user.length > 0) {
    callback(user[0])
  } else {
    data.role = "member"
    await adddata("users", data, (result: boolean) => {
      callback(data)

      if (result) {
        callback(data)
      }
    })
  }
}
