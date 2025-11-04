const SharedInput = ({
  text = "",
  type,
  placeholder,
  id,
  name,
  value,
  ngClass,
  customStyle = "",
  customClass,
  onChange,
  pattern,
  inputMode,
}) => {
  return (
    <div className={ngClass}>
      {text && (
        <label htmlFor={id} className={customClass}>
          {text}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        pattern={pattern}
        onChange={onChange}
        inputMode={inputMode}
        className={`${customStyle} outline-none text-[16px]`}
      />
    </div>
  );
};

export default SharedInput;
