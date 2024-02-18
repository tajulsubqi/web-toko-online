import React from "react"

type Props = {
  label?: string
  name: string
  type: string
  placeholder: string
}

const Input = (props: Props) => {
  const { label, name, type, placeholder } = props

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className="md:w-[100%] bg-slate-100 border border-slate-200 shadow-sm p-3 rounded-md mt-3 outline-none"
      />
    </div>
  )
}

export default Input
