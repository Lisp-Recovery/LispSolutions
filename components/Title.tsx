import { FC, HTMLAttributes } from "react";

interface ITitle extends HTMLAttributes<HTMLHeadingElement> {
    children: JSX.Element | string;
    marginButtom?: number;
}

export const Title: FC<ITitle> = ({ children, className, marginButtom = 4,...props }) => {
  return (
    <h2
      className={`text-primary font-medium text-3xl mb-${marginButtom} text-left ${className ?? ''}`}
      {...props}
    >
      {children}
    </h2>
  );
};