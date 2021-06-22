import { ButtonHTMLAttributes } from "react";

import '../styles/button.sass'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return (
    <button {...props} />
  );
}