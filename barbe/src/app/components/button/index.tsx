import React, { ButtonHTMLAttributes } from "react";
import ButtonA from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...props }: ButtonProps) {
  return <ButtonA {...props}>{children}</ButtonA>;
}
export default Button;
