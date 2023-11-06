import Link from "next/link";
import { Form } from "./Form";
import { Section } from "./Section";
import { Title } from "./Title";

export const Footer = () => {
  return (
    <footer className='w-full min-h-48 bg-primary p-4'>
      <Title className='!text-center md:text-left text-white mx-auto'>Entre em contato</Title>
      <div className="flex justify-center">
        <Form />
        <div className="w-0.5 bg-white mx-2"/>
        <div className="text-white flex flex-col justify-evenly">
          <Link href="https://web.whatsapp.com/send/?phone=75982188715&text&type=phone_number&app_absent=0">(47) 989110536</Link>
          <Link href="mailto:costaalexandre@gmail.com">costaalexandre@gmail.com</Link>
          <Link href="https://www.linkedin.com/company/lisp-solutions">Linkedin: lisp-solutions</Link>
        </div>
      </div>
      <div className="text-white text-center mt-8">Copyrights &copy; {new Date().getFullYear()} Todos os direitos reservados</div>
    </footer>
  );
};