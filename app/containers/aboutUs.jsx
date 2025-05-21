import React from 'react'

export const AboutUs = () => {
  return (
    <div id='sobre-nos' className="flex flex-col-reverse lg:flex-row bg-[#d9d9d9] w-full items-start justify-center my-4">
      <div className="flex flex-col justify-center h-auto gap-8 px-6 lg:pl-20 2xl:pl-40 lg:pr-32 py-12 lg:py-20 w-full lg:w-1/2">
        <span className="gradient-text uppercase text-xl font-grotesk tracking-[3px]">
          Sobre Nós
        </span>
        <h2 className="text-3xl lg:text-5xl font-aeonik font-bold">
          A KRAVIA é um centro de treinamento especializado em tecnologias que sustentam o mundo digital.
        </h2>
        <p className="font-aeonik text-lg lg:text-xl leading-relaxed">
          Somos credenciados pelos maiores players globais de tecnologia, como Cisco, Fortinet e AWS Academy. Mas o que nos torna únicos vai além da chancela: a KRAVIA detém capital intelectual exclusivo em treinamentos avançados, que poucos centros no mundo têm capacidade de oferecer.<br />
          Aqui, formar profissionais é mais do que ensinar ferramentas. É desenvolver pensamento crítico, visão técnica e confiança para liderar projetos complexos nas infraestruturas mais exigentes do mercado.
        </p>
      </div>

      <div
        className="relative w-full lg:w-1/2 h-full min-h-[350px] lg:min-h-[100vh] 2xl:min-h-[70vh] overflow-hidden"
      >
        <video
          width="320"
          height="840"
          preload="none"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-[100%] h-[100%] object-cover"
        >
          <source src="/video-sobre-min.mp4" type="video/mp4" />
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
