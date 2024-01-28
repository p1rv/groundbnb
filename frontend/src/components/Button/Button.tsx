import cls from "classnames";
import { PropsWithChildren } from "react";

interface IButton {
  onClick?: () => void;
  fill?: boolean;
  className?: string;
  [key: string]: unknown;
}

const Button: React.FC<PropsWithChildren<IButton>> = ({ children, onClick = () => {}, fill, className, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={cls(
        "rounded-full py-2 px-4 text-xl text-blue border-[3px] border-blue w-40 hover:bg-blue hover:text-blueWhite transition-color duration-200 hover:shadow-[0_0_40px_-10px_#2E4E6E]",
        { "bg-blue text-blueWhite": fill },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
