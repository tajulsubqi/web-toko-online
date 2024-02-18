import React from "react"

type PropsButton = {
  type: "button" | "submit"
  label: string
}

const Button = (props: PropsButton) => {
  const { type, label } = props

  return (
    <div>
      <button
        type={type}
        className="w-[100%] mt-5 bg-black text-white font-semibold px-4 py-3 rounded-md hover:bg-slate-700 duration-300 shadow-sm transition"
      >
        {label}
      </button>
    </div>
  )
}

export default Button
