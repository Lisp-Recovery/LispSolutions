"use client";
import { useState } from "react";
import { mailSender } from "@/services/mailSender";
import { Toaster } from "./Toaster";
import useToast from "@/hooks/useToaster";

export const Form = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const { isVisible, message, showToast, sucess } = useToast();

  const onSend = async () => {
    mailSender({ name, email, content }).then((res: Response) => {
      console.log(res.status);
      const sucess = res.status <= 300;
      showToast(3000, sucess, sucess ? 'Enviado!' : '');
    });
  };

  return (
    <>
      <Toaster isVisible={isVisible} isSucess={sucess} message={message}/>
      <div className="w-64">
        <input className="w-full p-2 mb-2 outline-blue-500 focus:outline focus:outline-4" type='text' placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)}/>
        <input className="w-full p-2 mb-2 outline-blue-500 focus:outline focus:outline-4" type='email' placeholder='Exemplo@exemplo.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <textarea className="w-full min-h-[40px] p-2 mb-2 outline-blue-500 focus:outline focus:outline-4" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Escreva sua mensagem aqui!"/>
        <button className="w-full  bg-white text-primary p-2 outline-blue-500 focus:outline focus:outline-4 font-medium active:bg-blue-500 active:text-white" onClick={onSend}>Enviar</button>
      </div>
    </>
  );
}; 
