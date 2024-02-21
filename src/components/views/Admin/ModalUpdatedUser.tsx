import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Modal from "@/components/ui/Modal"
import Select from "@/components/ui/Select"
import userServices from "@/services/user"
import React, { FormEvent } from "react"
import toast from "react-hot-toast"

const ModalUpdatedUser = (props: any) => {
  const { updatedUser, setupdatedUser, setUserData } = props
  const [isLoading, setIsloading] = React.useState(false)

  const handleUpdateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsloading(true)
    const form: any = e.target as HTMLFormElement
    const data = {
      role: form.role.value,
    }

    const result = await userServices.updateUsers(updatedUser.id, data)

    if (result.status === 200) {
      setIsloading(false)
      setupdatedUser({})
      const { data }: any = await userServices.getAllUsers()
      setUserData(data.data)
      toast.success("User updated")
    } else {
      setIsloading(false)
      toast.error("update failed")
    }
  }

  return (
    <div>
      <Modal onClose={() => setupdatedUser({})}>
        <h1 className="text-3xl font-bold mb-5">Update User</h1>
        <form onSubmit={handleUpdateUser}>
          <Input
            label="Fullname"
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
            defaultValue={updatedUser.fullname}
            disabled
          />

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            defaultValue={updatedUser.email}
            disabled
          />

          <Select
            label="Role"
            name="role"
            defaultValue={updatedUser.role}
            // disabled
            options={[
              { label: "Admin", value: "admin" },
              { label: "Member", value: "member" },
            ]}
          />

          <div className="mt-7 w-[100px]">
            <Button
              type="submit"
              label={isLoading ? "Loading..." : "Update"}
              size="small"
            />
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default ModalUpdatedUser
