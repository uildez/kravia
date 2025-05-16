import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div className='relative flex flex-col w-full items-start justify-center min-h-[60vh] gap-8 pt-32 my-12 lg:my-20 px-8 lg:px-20 2xl:px-40'>
      <h1 className='z-2 w-full lg:w-[50%] 2xl:w-[30%] text-3xl lg:text-5xl font-aeonik font-bold mt-40 lg:mt-0'>Treinamentos que moldam os profissionais <span className='gradient-text'>mais requisitados do mercado.</span></h1>
      <p className='z-2 w-full lg:w-[50%] 2xl:w-1/4'>Na KRAVIA, você aprende com quem forma os líderes da infraestrutura digital: treinamentos oficiais e conteúdo exclusivo em redes, cibersegurança e cloud — com a autoridade de quem entrega os cursos mais completos do Brasil.</p>
      <Link
        href={""}
        className={`z-2 relative hover:scale-105 min-h-[50px] group text-white font-bold bg-purple-light rounded-lg px-12 py-4 w-full lg:w-[20%] font-grotesk overflow-hidden transition-transform ease-in-out duration-500`}
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
      <div className='absolute min-w-full min-h-screen z-0 overflow-hidden right-0 max-w-[1920]'>
        <video
          width="900"
          height="900"
          autoPlay
          muted
          playsInline
          style={{ width: '100%', height: 'auto' }}
          preload="none" className="min-w-full lg:min-h-screen lg:translate-x-72 translate-y-12 lg:-translate-y-20"
        >
          <source src="/capa-bg-kravia-min.mp4" type="video/mp4" />
          <track
            src="/video-sobre-min.mp4"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Seu browser não suporta reprodução de vídeo.
        </video>
      </div>
    </div>
  )
}
