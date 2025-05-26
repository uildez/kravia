import Link from 'next/link'
import React from 'react'

export const Cta = () => {
  return (
    <div className='flex flex-col items-center gap-12 px-8 lg:px-40 my-20'>
      <h2 className="w-full lg:w-3/4 text-3xl lg:text-5xl font-aeonik font-bold text-center">Capacite sua equipe com o maior instrutor Fortinet da América Latina</h2>
      <Link
        href="mailto:contato@kravia.com.br"
        className={`relative hover:scale-105 min-h-[50px] group text-white font-bold bg-purple-light rounded-lg px-12 py-4 w-full lg:w-[25%] font-grotesk overflow-hidden transition-transform ease-in-out duration-500`}
      >
        <span
          className="absolute flex gap-2 top-0 left-0 w-full h-full items-center justify-center translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-in-out"
        >
          <span className="text-lg">Fale com um especialista</span>
        </span>
        <span
          className="absolute flex gap-2 top-0 left-0 w-full h-full items-center justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
        >
          <span className="text-lg">Fale com um especialista</span>
        </span>
      </Link>
    </div>
  )
}
