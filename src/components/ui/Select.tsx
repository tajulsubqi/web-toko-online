type Options = {
  label: string
  value: string
}

type PropsType = {
  name: string
  label: string
  defaultValue?: string
  disabled?: boolean
  options: Options[]
}

const Select = (props: PropsType) => {
  const { name, label, defaultValue, disabled, options } = props

  return (
    <div className="flex flex-col mt-3">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        disabled={disabled}
        className="bg-slate-100 border border-slate-200  shadow-sm p-3 rounded-md outline-none cursor-pointer"
      >
        {options.map((item) => (
          <option className="bg-slate-300" key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
