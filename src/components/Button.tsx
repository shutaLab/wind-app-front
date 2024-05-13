import React from "react";
interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = "submit",
  text,
  className = "",
  onClick,
  ...rest
}) => {
  const baseClasses =
    "px-2 py-1 rounded-md transform hover:scale-95 duration-100";

  return (
    <button
      type={type}
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
