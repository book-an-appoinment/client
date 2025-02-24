const TimePicker = ({
  label,
  name,
  register,
  className = "",
  errors,
  rules = {},
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-[#010205] font-semibold text-[24px] font-raleway mb-5 capitalize">
          {label}
        </label>
      )}
      <input
        type="time"
        {...register(name, rules)}
        className={`w-full px-4 py-2 border-[1px] border-[#004D3F40] h-[80px] rounded-[8px] text-[22px] focus:outline-none focus:ring-1 focus:ring-[#14322c40] ${className}`}
      />
      {errors?.[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default TimePicker;
