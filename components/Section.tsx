import { FC, HTMLAttributes } from "react";

interface ISection extends HTMLAttributes<HTMLHeadingElement> {
    children: JSX.Element | string;
    marginButtom?: number;
}

export const Section: FC<ISection> = ({ children,...props }) => {
  return (
    <section className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-8 text-justify' {...props}>
      {children}
    </section>
  );
};