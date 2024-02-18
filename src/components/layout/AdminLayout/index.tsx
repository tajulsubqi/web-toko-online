import React from "react"
import Sidebar from "../SideBar"
import { MdDashboard } from "react-icons/md"
import { FaCartPlus } from "react-icons/fa"
import { FaUserGroup } from "react-icons/fa6"

type PropsTypes = {
  children?: React.ReactNode
}

const listSidebarItem = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: <MdDashboard size={23} />,
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: <FaCartPlus size={23} />,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: <FaUserGroup size={23} />,
  },
]

const AdminLayout = (props: PropsTypes) => {
  const { children } = props

  return (
    <div className="flex">
      <Sidebar lists={listSidebarItem} />
      <div className="w-full p-7 px-10">{children}</div>
    </div>
  )
}

export default AdminLayout
