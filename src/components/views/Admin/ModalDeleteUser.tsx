import Button from "@/components/ui/Button"
import Modal from "@/components/ui/Modal"
import userServices from "@/services/user"
import React from "react"

const ModalDeleteUser = (props: any) => {
  const { deletedUser, setDeletedUser, setUserData } = props

  const handleDeletedUser = async () => {
    userServices.deleteUser(deletedUser.id)
    setDeletedUser({})
    const { data }: any = await userServices.getAllUsers()
    setUserData(data.data)
  }

  return (
    <Modal size="small" onClose={() => setDeletedUser({})}>
      <h1 className="text-xl font-semibold text-center">Are you sure?</h1>
      <div className="mt-3 flex flex-col gap-2">
        <Button
          onClick={() => handleDeletedUser()}
          label="Yes"
          type="button"
          size="small"
          bgColor="red"
        />
        <Button
          onClick={() => setDeletedUser({})}
          label="No"
          type="button"
          size="small"
        />
      </div>
    </Modal>
  )
}

export default ModalDeleteUser
