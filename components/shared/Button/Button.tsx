import type { FC, HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <button className="bg-slate-500 hover:bg-slate-600 active:bg-slate-700 mb-4 p-3 rounded-lg mr-3" {...props}>
    {children}
  </button>
);

export default Button;
