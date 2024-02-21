import React from "react"

type PropsButton = {
  type: "button" | "submit"
  label?: string
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
        className={`w-[100%] justify-center text-white items-center font-semibold rounded-md  duration-300 shadow-sm transition flex gap-2 ${
          bgColor == "dark"
            ? "bg-slate-800 hover:bg-slate-600"
            : bgColor == "red"
            ? "bg-[tomato] hover:bg-red-500"
            : "bg-slate-800 hover:bg-slate-700"
        } ${size === "small" ? "text-sm px-2 py-2" : "text-lg px-4 py-3"}`}
      >
        {icon}
        {label}
      </button>
    </div>
  )
}

export default Button
