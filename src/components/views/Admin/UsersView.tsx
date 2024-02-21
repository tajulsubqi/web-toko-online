import AdminLayout from "@/components/layout/AdminLayout"
import Button from "@/components/ui/Button"
import React, { useEffect, useState } from "react"
import ModalUpdatedUser from "./ModalUpdatedUser"
import { BsPenFill, BsTrash3 } from "react-icons/bs"
import { FaRegEdit } from "react-icons/fa"
import userServices from "@/services/user"
import ModalDeleteUser from "./ModalDeleteUser"

type PropsType = {
  users: any
}

const UsersAdminView = (props: PropsType) => {
  const { users } = props

  const [updatedUser, setupdatedUser] = React.useState<any>({})
  const [deletedUser, setDeletedUser] = useState<any>({})
  const [userData, setUserData] = useState([])

  useEffect(() => {
    setUserData(users)
  }, [users])

  // console.log(userData)

  return (
    <>
      <AdminLayout>
        <h1 className="text-3xl  font-bold">User Management</h1>
        <div className="w-full flex justify-center">
          <table className="w-[90%] table-auto border-collapse border-spacing-0 border-[2px] mt-10 text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">No</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {userData.map((user: any, index: number) => (
                <tr className="border text-sm" key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <div className="flex gap-2 p-2 justify-center">
                      <Button
                        onClick={() => setupdatedUser(user)}
                        bgColor="dark"
                        type="button"
                        // label="Edit"
                        size="small"
                        icon={<FaRegEdit />}
                      />

                      <Button
                        onClick={() => setDeletedUser(user)}
                        type="button"
                        // label="Delete"
                        size="small"
                        bgColor="red"
                        icon={<BsTrash3 />}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>

      {/* modal updated user */}
      {Object.keys(updatedUser).length && (
        <ModalUpdatedUser
          updatedUser={updatedUser}
          setupdatedUser={setupdatedUser}
          setUserData={setUserData}
        />
      )}

      {/* modal delete user */}
      {Object.keys(deletedUser).length && (
        <ModalDeleteUser
          deletedUser={deletedUser}
          setDeletedUser={setDeletedUser}
          setUserData={setUserData}
        />
      )}
    </>
  )
}

export default UsersAdminView
