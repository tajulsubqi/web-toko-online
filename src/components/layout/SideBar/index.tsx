import Button from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { MdOutlineLogout } from "react-icons/md"

type PropsTypes = {
  lists: Array<{
    title: string
    url: string
    icon: JSX.Element
  }>
}

const Sidebar = (props: PropsTypes) => {
  const { lists } = props
  const { pathname } = useRouter()

  return (
    <div className="bg-slate-800 h-screen rounded-r-3xl text-slate-50 p-[20px] w-[280px] flex flex-col justify-between ">
      <div>
        <h1 className="text-2xl font-semibold text-center">Admin Panel</h1>

        <hr className="border-slate-600 border-[2px] my-2 mb-3" />

        <div className="flex flex-col gap-2">
          {lists.map((item, index) => (
            <Link
              href={item.url}
              className={`flex items-center gap-2 hover:bg-slate-300 hover:text-slate-800 p-2 px-3 rounded-xl duration-300 transition ${
                pathname === item.url ? " bg-slate-300 text-slate-800" : ""
              }`}
              key={index}
            >
              <div>{item.icon}</div>
              <h4 className="cursor-pointer text-md ">{item.title}</h4>
            </Link>
          ))}
        </div>
      </div>
      <Button
        onClick={() => signOut()}
        label="Logout"
        type="submit"
        bgColor
        icon={<MdOutlineLogout size={25} />}
      />
    </div>
  )
}

export default Sidebar
