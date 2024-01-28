import cls from "classnames";
import { ChangeEvent } from "react";

interface ITextInput {
  name: string;
  value: string | number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  placeholder: string;
  type?: string;
  className?: string;
  [key: string]: unknown;
}

const TextInput: React.FC<ITextInput> = ({ name, value, handleChange, error, touched, placeholder, className, type = "text", ...rest }) => {
  return (
    <div
      className={cls(
        "bg-blueLight rounded-full py-2 px-4 group focus-within:shadow-[0_0_30px_-10px_#2E4E6E80] transition-color duration-200",
        className
      )}
    >
      <input
        name={name}
        value={value}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        className="bg-transparent w-full outline-none text-xl"
        {...rest}
      />
      {touched && error && <div>{error}</div>}
    </div>
  );
};

export default TextInput;
