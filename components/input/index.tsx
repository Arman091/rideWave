import { FC, InputHTMLAttributes, ReactNode } from "react";
import { FaInfoCircle } from "react-icons/fa";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  tooltip?: string; // extra info
  error?: string; // error message (Formik or custom validation can pass this)
};

const Input: FC<InputProps> = ({ label, tooltip, error, ...props }) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <div className="flex items-center mb-1 space-x-1">
          <label className="font-medium">{label}</label>
          {tooltip && (
            <span className="relative group cursor-pointer text-gray-400">
              <FaInfoCircle size={14} />
              <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                {tooltip}
              </span>
            </span>
          )}
        </div>
      )}
      <input
        {...props}
        className={`w-full border px-3 py-2 rounded focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
