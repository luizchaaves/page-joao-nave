import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { ButtonElement } from './styles';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
  return (
    <ButtonElement {...props}>{children}</ButtonElement>
  )
}

export default Button