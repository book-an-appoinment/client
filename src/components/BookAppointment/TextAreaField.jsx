const TextAreaField = ({
  label,
  name,
  register,
  placeholder,
  className = "",
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-[#010205] font-semibold text[24px] font-raleway mb-5 capitalize">
          {label}
        </label>
      )}
      <textarea
        {...register(name)}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border-[1px] border-[#004D3F40] rounded-md focus:outline-none focus:ring-1 focus:ring-[#14322c40] resize-none ${className}`}
        rows={4} // Default row size, can be overridden via className
      ></textarea>
    </div>
  );
};

export default TextAreaField;
