"use client"
import { useState } from "react"

export const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')

    const onSend = () => {
        console.log({name, email, content});
    }

    return (
        <div className="flex flex-col">
            <input className="border-primary border-2" type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input className="border-primary border-2" type='email' placeholder='exemple@exemple.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <textarea className="border-primary border-2" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Escreva sua mensagem aqui!"/>
            <button className="border-primary border-2" onClick={onSend}>enviar</button>
        </div>
    )
} 