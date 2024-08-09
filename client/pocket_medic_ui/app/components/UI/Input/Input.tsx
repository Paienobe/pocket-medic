import React from "react";
import { InputProps } from "./types";

const Input = ({
  value,
  changeFunc,
  placeholder,
  className,
  type = "text",
  required = true,
}: InputProps) => {
  return (
    <div>
      <input
        value={value}
        onChange={changeFunc}
        placeholder={placeholder}
        className={`border border-primary-gray p-3 rounded-lg focus:outline-primary-blue ${className}`}
        type={type}
        required={required}
      />
    </div>
  );
};

export default Input;
