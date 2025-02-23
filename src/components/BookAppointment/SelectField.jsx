const SelectField = ({
  label,
  name,
  register,
  options = [],
  className = "",
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-[#010205] font-semibold text[24px] font-raleway mb-5 capitalize">
          {label}
        </label>
      )}
      <select
        {...register(name)}
        className={`w-full px-4 py-2 border-[1px] border-[#004D3F40] rounded-md focus:outline-none focus:ring-1 focus:ring-[#14322c40] ${className}`}
      >
        <option value="">Select</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
