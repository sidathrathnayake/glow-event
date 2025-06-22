import clsx from "clsx";
import { Colors } from "@enums/colors";
import { IInputFieldStyles } from "@interfaces/components/styles";

interface IInputField {
  id: string;
  name: string;
  label: string;
  value: any;
  type?: string;
  placeholder?: string;
  error?: string;
  customStyles?: IInputFieldStyles;
  disabled?: boolean;
  handleChangeInput: (value: any) => void;
  required?: boolean;
}

const InputField = ({
  id,
  name,
  label,
  value,
  type = "text",
  placeholder = "",
  error,
  customStyles,
  disabled,
  required = false,
  handleChangeInput,
}: IInputField) => {
  const textColor = customStyles?.textColor || Colors.GRAY;

  return (
    <div className="w-full max-w-sm min-w-[200px] text-start">
      <div className="relative">
        <input
          id={id}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={(e) => handleChangeInput(e.target.value)}
          className={clsx(
            `peer w-full bg-transparent placeholder: text-${textColor}-400 `,
            `text-sm text-${textColor}-500 `,
            `border ${
              error ? `border-${Colors.RED}-500` : `border-${textColor}-200`
            } `,
            `rounded-lg px-3 py-2 transition duration-300 ease `,
            `focus:outline-none focus: border-${textColor}-500 `,
            `hover: border-${textColor}-300 `,
            `shadow-sm focus:shadow `,
            disabled && "opacity-50 cursor-not-allowed"
          )}
        />
        <label
          htmlFor={id}
          className={clsx(
            `absolute cursor-text bg-white px-1 left-2.5 top-2.5`,
            `${error ? `text-${Colors.RED}-500` : `text-${textColor}-500`} `,
            `text-sm transition-all transform origin-left`,
            `peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-${textColor}-400 peer-focus:scale-90`,
            `peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:left-2.5 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-${textColor}-400 peer-[&:not(:placeholder-shown)]:scale-90`,
            placeholder &&
              `peer-placeholder-shown:-top-2 peer-placeholder-shown:left-2.5 peer-placeholder-shown:text-xs peer-placeholder-shown:text-${textColor}-400 peer-placeholder-shown:scale-90`
          )}
        >
          {label}
        </label>
        {error && <p className="m-1 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
};

InputField.displayName = "InputField";
export default InputField;
