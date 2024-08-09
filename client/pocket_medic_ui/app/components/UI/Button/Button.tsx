"use client";
import { ButtonProps } from "./types";

const Button = ({
  text,
  bg_color = "bg-primary-blue",
  hover_bg_color = "hover:bg-primary-blue-dark",
  text_color = "text-white",
  className,
  disabled = false,
  clickFunction,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={`py-2 px-4 rounded-lg transition-colors duration-300 font-light disabled:cursor-not-allowed disabled:opacity-25 ${bg_color} ${hover_bg_color}  ${text_color} ${className}`}
      onClick={clickFunction}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
