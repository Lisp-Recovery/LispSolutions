import { FC, HTMLAttributes } from "react";

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
    children: JSX.Element | string;
}

export const Title: FC<ITitle> = ({ children, className, ...props }) => {
  return (
    <h2
      className={`text-primary font-medium text-3xl mb-4 text-left ${className ?? ''}`}
      {...props}
    >
      {children}
    </h2>
  );
};