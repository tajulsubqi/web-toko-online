import React from "react"

type PropsButton = {
  type: "button" | "submit"
  label: string
  bgColor?: boolean
  icon?: JSX.Element
  onClick?: () => void
}

const Button = (props: PropsButton) => {
  const { type, label, bgColor, icon, onClick } = props

  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`w-[100%] mt-5 bg-black justify-center text-white font-semibold px-4 py-3 rounded-md hover:bg-slate-700 duration-300 shadow-sm transition flex gap-2 ${
          bgColor ? "bg-slate-800 hover:bg-slate-800 hover:text-slate-300 " : ""
        }`}
      >
        {icon}
        {label}
      </button>
    </div>
  )
}

export default Button
