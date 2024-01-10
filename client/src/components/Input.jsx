const Input = ({ type = "text", label, value, setValue }) => {
  const handleChange = (e) => setValue(e.target.value)

  return (
    <label className="block mb-4">
      <span className="text-gray-600">{label}</span>
      <input
        type={type}
        name={label}
        value={value}
        onChange={handleChange}
        className="w-full mt-1 rounded border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-25"
      />
    </label>
  )
}

export default Input
