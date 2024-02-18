import React from "react"

type PropsButton = {
  type: "button" | "submit"
  label: string
  bgColor?: "dark" | "red" | "transparent"
  icon?: JSX.Element
  onClick?: () => void
  size?: "small" | "medium"
}

const Button = (props: PropsButton) => {
  const { type, label, bgColor, icon, size, onClick } = props

  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`w-[100%] bg-slate-800 justify-center text-white font-semibold rounded-md hover:bg-slate-700 duration-300 shadow-sm transition flex gap-2 ${
          bgColor
            ? "dark"
              ? "bg-slate-800 hover:bg-slate-800"
              : "bg-red-800 hover:bg-red-500"
            : "bg-slate-800 hover:bg-slate-800"
        } ${size === "small" ? "text-sm px-2 py-2" : "text-lg px-4 py-3"}`}
      >
        {icon}
        {label}
      </button>
    </div>
  )
}

export default Button
