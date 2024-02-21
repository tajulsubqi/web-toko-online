import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import React from "react"

const Navbar = () => {
  const { data }: any = useSession()
  console.log(data)

  return (
    <div className="flex justify-between p-4 bg-[#202020] text-white sticky top-0 z-30">
      <div className="flex items-center">
        <Link href={"/"}>Home</Link>
      </div>

      <div className="flex items-center gap-5">
        <p className="text-white">
          {data ? "Hello, " : ""}
          <span className="font-semibold">{data?.user?.fullname}</span>
        </p>

        <button
          onClick={() => (data ? signOut() : signIn())}
          className="bg-slate-200 text-black p-2 rounded-md font-semibold hover:bg-slate-300 duration-400 transition"
        >
          {data ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  )
}

export default Navbar
