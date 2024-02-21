import React from "react"

type Props = {
  label?: string
  name: string
  type: string
  placeholder: string
  defaultValue?: string
  disabled?: boolean
}

const Input = (props: Props) => {
  const { label, name, type, placeholder, defaultValue, disabled } = props

  return (
    <>
      <div className="mt-3">
        {label && (
          <label className="font-semibold" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
          className="md:w-[100%] bg-slate-100 border border-slate-200 shadow-sm p-3 rounded-md outline-none"
        />
      </div>
    </>
  )
}

export default Input
