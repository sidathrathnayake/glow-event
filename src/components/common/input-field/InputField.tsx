import clsx from "clsx";
import { Colors } from "@enums/colors";
import { IInputFieldStyles } from "@interfaces/components/styles";

interface IInputField {
  id: string;
  name: string;
  label: string;
  value: any;
  error?: string;
  customStyles?: IInputFieldStyles;
  disabled?: boolean;
  handleChangeInput: (value: any) => void;
}

const InputField = ({
  id,
  name,
  label,
  value,
  error,
  customStyles,
  disabled,
  handleChangeInput,
}: IInputField) => {
  const textColor = customStyles?.textColor || Colors.GRAY;

  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <div className="relative">
        <input
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          onChange={(e) => handleChangeInput(e.target.value)}
          className={clsx(
            `peer w-full bg-transparent placeholder: text-${textColor}-400 `,
            `text-sm text-${textColor}-700 `,
            `border ${error ? `border-${Colors.RED}-200` : `border-${textColor}-200`} `,
            `rounded-lg px-3 py-2 transition duration-300 ease `,
            `focus:outline-none focus: border-${textColor}-400 `,
            `hover: border-${textColor}-300 `,
            `shadow-sm focus:shadow `,
            disabled && 'opacity-50 cursor-not-allowed'
          )}
        />
        <label
          htmlFor={id}
          className={clsx(
            `absolute cursor-text bg-white px-1 left-2.5 top-2.5 `,
            `text-${textColor}-400 text-sm transition-all transform origin-left `,
            `peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus: text-${textColor}-400 peer-focus:scale-90`
          )}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

InputField.displayName = "InputField";
export default InputField;