const Input = ({ type = text, label, value, setValue }) => {
  const handleChange = (e) => setValue(e.target.value)

  return (
    <label>
      <span>{label}</span>
      <input type={type} name={label} value={value} onChange={handleChange} />
    </label>
  )
}

export default Input
