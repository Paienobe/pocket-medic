import React from "react";
import { InputProps } from "./types";

const Input = ({
  value,
  changeFunc,
  placeholder,
  className,
  type = "text",
}: InputProps) => {
  return (
    <div>
      <input
        value={value}
        onChange={changeFunc}
        placeholder={placeholder}
        className={`border border-primary-gray p-3 rounded-lg ${className}`}
        type={type}
      />
    </div>
  );
};

export default Input;
