'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ nome: '', email: '', phone: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (res.ok) {
      setStatus('send')
      setForm({ nome: '', email: '', telefone: '' })
    } else {
      setStatus('Erro ao enviar Telefone. Tente novamente.')
    }
  }

  return (
    <div className='w-full h-full'>
      {status === 'send' ?
        <div className='flex flex-col items-center justify-center gap-4 text-white bg-purple-light rounded-2xl lg:gap-8 w-full h-full p-8'>
          <h2 className="text-xl lg:text-3xl text-left font-bold font-aeonik">Envio feito com sucesso</h2>
          <p className='text-center'>Assim que possível nossa equipe entrará em contato com mais informações</p>
        </div>
        :
        <form onSubmit={handleSubmit} className="flex flex-col items-end justify-end space-y-4 mx-auto">
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full border-2 border-purple-medium p-4 lg:py-4 lg:px-8 rounded-2xl"
            required
          />
          <input
            name="phone"
            type="phone"
            placeholder="Seu telefone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border-2 border-purple-medium p-4 lg:py-4 lg:px-8 rounded-2xl"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
            className="w-full border-2 border-purple-medium p-4 lg:py-4 lg:px-8 rounded-2xl"
            required
          />
          <button type="submit" className="flex text-center text-white font-bold group-hover:bg-white group-hover:text-purple-light bg-purple-light rounded-lg px-12 py-4 font-grotesk transition-transform ease-in-out duration-500">
            {status === "sending" ? "Enviando..." : "Enviar"}
          </button>
        </form>
      }
    </div>
  )
}
