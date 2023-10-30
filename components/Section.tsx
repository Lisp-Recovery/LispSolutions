import { FC, HTMLAttributes, ReactNode } from "react";

interface ISection extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}

export const Section: FC<ISection> = ({ children,...props }) => {
  return (
    <section className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-8 text-justify' {...props}>
      {children}
    </section>
  );
};