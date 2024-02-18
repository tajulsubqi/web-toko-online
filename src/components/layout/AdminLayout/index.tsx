import React from "react"
import Sidebar from "../SideBar"
import { MdDashboard } from "react-icons/md"
import { FaCartPlus } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"

type PropsTypes = {
  children?: React.ReactNode
}

const listSidebarItem = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: <MdDashboard size={25} />,
  },
  {
    title: "Products",
    url: "/admin/products",
    icon: <FaCartPlus size={25} />,
  },
  {
    title: "Profile",
    url: "/admin/profile",
    icon: <FaUserCircle size={25} />,
  },
]

const AdminLayout = (props: PropsTypes) => {
  const { children } = props

  return (
    <div className="flex gap-4">
      <Sidebar lists={listSidebarItem} />
      <div>{children}</div>
    </div>
  )
}

export default AdminLayout
