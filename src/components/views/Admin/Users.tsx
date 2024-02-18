import AdminLayout from "@/components/layout/AdminLayout"
import Button from "@/components/ui/button"
import React from "react"

type PropsType = {
  users: any
}

const UsersAdminView = (props: PropsType) => {
  const { users } = props
  console.log(users)

  return (
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
            {users.map((user: any, index: number) => (
              <tr className="border text-sm" key={user.id}>
                <td>{index + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <div className="flex gap-2 p-2 justify-center">
                    <Button type="button" label="Update" size="small" />
                    <Button type="button" label="Delete" size="small" bgColor="red" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export default UsersAdminView
