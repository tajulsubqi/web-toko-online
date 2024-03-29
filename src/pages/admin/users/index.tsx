import UsersAdminView from "@/components/views/Admin/UsersView"
import userServices from "@/services/user"
import React, { useEffect, useState } from "react"

const AdminUserPage = () => {
  const [users, setUsers] = useState([])
  // const userData,
  //   setuserData = []

  const getAllUsers = async () => {
    try {
      const res: any | undefined = await userServices.getAllUsers()
      setUsers(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <>
      <UsersAdminView users={users} />
    </>
  )
}

export default AdminUserPage
